import React, { useState } from 'react'
import { Box } from '../../components/styled'
import SingleShip from './SingleShip'
import { NextButton, PreviousButton, Slide, Slider } from './Slider'
import { CaretIcon } from '../../components/icons'

export default function ListShips({_Data,get_ships}) {

  const [_Active, _setActive] = useState(0)

  const audio = new Audio("/change.wav")


  return (
    <>
      <Slider>
        <NextButton onClick={()=>_Data && _Active< _Data.length-1 && audio.play() && _setActive(_Active+1)} >
          <CaretIcon width={"70px"} height={"70px"} color="var(--primary)"/>
        </NextButton>
        {
            _Data.map((ship,index)=>
              <Slide key={ship.id} className={`${index == _Active && "active"}`}>
                <SingleShip  ship={ship}/>
              </Slide>
                )
        }
        <PreviousButton onClick={()=>_Active!=0 && audio.play() && _setActive(_Active-1)}>
          <CaretIcon width={"70px"} height={"70px"} color="var(--primary)"/>
        </PreviousButton>
      </Slider>
    </>
  )
}
