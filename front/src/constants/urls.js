const swapi="https://swapi.dev";
const swlocal="http://127.0.0.1:8000"

export default 
{
    SHIPS: `${swlocal}/starwars/`,
    SINGLE_SHIP:(id="")=> `${swapi}/api/starships/${id}`,
    SHIP_IMAGE: (name="", model="") => `${swlocal}/starwars/image/?name=${name}&model=${model}`
}