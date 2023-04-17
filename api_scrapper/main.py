from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from requests import get
from bs4 import BeautifulSoup
import json

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CLASS_NAME = "image"
PILOT_URL_SOURCE = "https://swapi.dev/api/people/?page={}"
SHIPS_URL_SOURCE = "https://swapi.dev/api/starships/?page={}"
IMAGE_URL_SOURCE = "https://starwars.fandom.com/wiki/{}"

def get_url(ship_name):
    try:
        result = get(IMAGE_URL_SOURCE.format(ship_name))

        if result.status_code == 200:
            html = BeautifulSoup(result.text, 'lxml')

            figure = html.find('figure')
            if figure:
                anchor = figure.find("a", {"class": CLASS_NAME})
                if anchor:
                    return anchor.attrs['href']
    except Exception as e:
        print(f'Exception Occured while getting image for {ship_name}')
        print(e)

@app.get("/starwars/image")
def starwars_image(name, model=None):
    url = get_url(name)
    if not url:
        url = get_url(model)
    return {'url': url.split('/revision/')[0]}


@app.get("/starwars/")
def starwars():


    # Getting Pilots

    pilots = []
    page = 1
    response = get(PILOT_URL_SOURCE.format(page))
    data = json.loads(response.text)

    while response.status_code == 200:
        print(f"getting pilots .... page{page}")
        pilots = [*pilots, *data['results']]
        page += 1
        response = get(PILOT_URL_SOURCE.format(page))
        data = json.loads(response.text)


    # Getting Ships
    ships = []
    page = 1
    response = get(SHIPS_URL_SOURCE.format(page))
    data = json.loads(response.text)

    while response.status_code == 200:
        print(f"getting ships .... page{page}")
        extract_pilot_id = lambda url: int(url.split('/people/')[-1].replace('/', ''))
        get_pilots = lambda id_pilots: [pilot for pilot in pilots if extract_pilot_id(pilot['url']) in id_pilots]

        list_ = list(map(lambda ship: {**ship, 'pilots': get_pilots([extract_pilot_id(url) for url in ship.get('pilots', [])])}, data['results']))
        ships.extend(list_)

        page += 1
        response = get(SHIPS_URL_SOURCE.format(page))
        data = json.loads(response.text)
    
    return ships

