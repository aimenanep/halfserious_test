import React from 'react'
import { useNavigate , useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Container } from '../../components/styled';
import { ExtraIcon, ExtraInfo } from '../../_SHIPS/components/SingleShip';
import mass from '../../img/mass.png'
import length from '../../img/length.png'
import year from '../../img/birth.png'
import gender from '../../img/gender.png'
import { CaretIcon } from '../../components/icons';


export default function SinglePilot() {

  const {state} = useLocation();

  return (
    <SinglePilotContainer>


        <Box items="center" flex> 
          <Link to="/">
              <BackButton>
                  <CaretIcon width={"70px"} height={"70px"} color="var(--primary)"/>
              </BackButton>
          </Link>
          <Image  src={state.image} /> 
        </Box>


        <PilotName style={{color:"white"}}> {state.name} </PilotName>
        {
          [
            {name:"Heigth", image:length, value: state.height},
            {name:"Mass", image:mass, value: state.mass},
            {name:"Birth Year", image:year, value: state.birth_year},
            {name:"Gender", image:gender, value: state.gender},
          ].map(info=>
              <ExtraInfo>
                <ExtraIcon src={info.image} />
                {info.name} {info.value}
              </ExtraInfo>
            
            )
        }


    </SinglePilotContainer>
  )
}

const SinglePilotContainer=styled.div`
  padding-inline: 15px;
  position: relative;
  min-height: 100vh;
`


export const BackButton=styled.button`
        background: none;
        border: none;
        transform: rotate(90deg);
        
`


const PilotName=styled.h1`
  color:white;
`
const Image=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 1rem;
`
