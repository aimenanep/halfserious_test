import React from 'react'
import styled from 'styled-components'
import SinglePilot from './SinglePilot'

export default function ListPilots({pilots}) {
  return (
    <ListPilotsContainer>
        {
          pilots.map((p,index)=>
            <SinglePilot pilot={p} key={index}/> 
          )
        }
    </ListPilotsContainer>
  )
}


const ListPilotsContainer=styled.div`
    display: flex;
    max-width: calc( 100% - 150px);
    overflow-x: scroll;
    gap: 15px;
`