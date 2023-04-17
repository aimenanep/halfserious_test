import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Container, Box } from './components/styled'
import { TrophyIcon } from './components/icons'
import {AudioPlayer} from './components'
import Background from './layouts/Background'
import Logo from './layouts/Logo'
import whitesoldier from "./img/stormtrooper.png"
import Home from './_SHIPS/pages';
import SinglePilot from './_PILOTS/pages/SinglePilot';
import styled from 'styled-components';
import useShipsFetch from './_SHIPS/hooks/useShipsFetch';
import urls from './constants/urls';

export default function App() {

  const [_Active, _setActive] = useState(false)
  const { _Data, _Loading, _Error, get_ships }=useShipsFetch(urls.SHIPS)


  return (
    <>
      <Logo />
      {!_Active && <AudioPlayer _setActive={_setActive}/>}
      <Container  style={{width:'100%'}} flex>
        <LeftContainer>
          <img  src={whitesoldier} style={{width:"100%"}}/>
        </LeftContainer>
        <RightContainer>
          <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home _Data={_Data} _Loading={_Loading} get_ships={get_ships} />} exact></Route>
                <Route path='/pilot/:pilotSlug'  element={<SinglePilot />} exact></Route>
            </Routes>
          </BrowserRouter>
        </RightContainer>
      </Container>
      <Background />
    </>
    
  )
}


export const LeftContainer=styled.div`
  width: 30%;
  padding-inline: 15px;

  @media (max-width: 600px) {
      display: none;
    }  
`

export const RightContainer=styled.div`
    width: 70%;
    
    @media (max-width: 600px) {
      width: 100%;
      padding-inline: 15px;
      } 
`