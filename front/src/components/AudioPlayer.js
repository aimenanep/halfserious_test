import {useState} from 'react';
import styled from 'styled-components';
import { PlayIcon } from './icons';

export function AudioPlayer({_setActive}) {

  let audio = new Audio("/starwars.mp3")

  const start = () => audio.play() && _setActive(true)
  // const start = () =>  _setActive(true)

  return (
    <FixedWrapper>
            <PlayButton onClick={start}>
                <PlayIcon width={35} height={35} fill="var(--white)"/>
            </PlayButton>
    </FixedWrapper>
  )
}

export const FixedWrapper=styled.div`
    position: fixed;
    z-index: 4;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #000;
`
export const PlayButton=styled.button`
        display: flex;
        width: 80;
        height: 80;
        align-items: center;
        justify-content: center;
        background-color: var(--primary) !important;
        border-radius: 50%;
        border: 0
`
