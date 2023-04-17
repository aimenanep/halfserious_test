import { Link } from "react-router-dom";
import { Box, Loader } from '../../components/styled'
import useShipsFetchImage from '../hooks/useShipsFetchImage'
import urls from '../../constants/urls'
import styled from 'styled-components'
import speed from '../../img/speed.png'
import money_bag from '../../img/money_bag.png'
import crew from '../../img/crew.png'
import passenger from '../../img/passenger.png'
import box from '../../img/box.png'
import length from '../../img/length.png'
import pilot from '../../img/pilot.png'
import SinglePilot from "../../_PILOTS/components/SinglePilot";
import ListPilots from "../../_PILOTS/components/ListPilots";


export default function SingleShip({ ship }) {

  const { _ImageURL, _Loading, _Error } = useShipsFetchImage(urls.SHIP_IMAGE(ship.name, ship.model))

  
  return (
    <>
      <Box width="100%">
        {
          _Loading ?
            <Loader />
            :
            <span onClick={()=>console.log()}>
              <Image src={_ImageURL} alt="" width="120px" height="120px" />
            </span>  
        }
        <Name>{ship.name}</Name>
        <Model>{ship.model} by <Manufacturer>{ship.manufacturer}</Manufacturer></Model>



        <ExtraInfo>
          <ExtraIcon src={length} />
           Length {ship.length}
        </ExtraInfo>


        <ExtraInfo>
          <ExtraIcon src={speed} />
           Max Atmosphering Speed{ship.max_atmosphering_speed}
        </ExtraInfo>


        <ExtraInfo>
          <ExtraIcon src={pilot} />
           Pilots {ship.pilots.length}
        </ExtraInfo>

        {
          <ListPilots pilots={ship.pilots} />
        }


        <ExtraInfo>
          <ExtraIcon src={crew} />
           Crew {ship.crew}
        </ExtraInfo>


        <ExtraInfo>
          <ExtraIcon src={passenger} />
          Passengers {ship.passengers}
        </ExtraInfo>

        <ExtraInfo>
          <ExtraIcon src={box} />
          Box {ship.cargo_capacity}
        </ExtraInfo>

        <Cost>
          <ExtraIcon src={money_bag}/> 
          {ship.cost_in_credits.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $
        </Cost>

      </Box>
    </>
  )
}

const Image = styled.img.attrs({
  className: 'ship-image',
  })`
  width: 120px;
  height: 120px;
  border-radius: 1rem;


  @media (min-width: 700px) {
             position:absolute;
             bottom:70px;
             right:70px;
        } 
`

const Name = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
`

const Model = styled.h2`
  font-size: 1rem;
  color: white;
`

const Manufacturer = styled.span`
  font-size: 1rem;
  color: yellow;
`

const Cost = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: yellow;
  display:flex;
  align-items: center;
`

export const ExtraInfo = styled.p`
  font-size: 1rem;
  color: white;
  display:flex;
  align-items: center;
`

export const ExtraIcon = styled.img`
  display: inline;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`