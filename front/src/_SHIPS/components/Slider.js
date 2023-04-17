import styled from "styled-components";

export const Slider=styled.div`
    position: relative;
    min-height: 100vh;
`
export const NextButton=styled.button`
        position: absolute;
        top:50%;
        right:0px;
        z-index: 3;
        background: none;
        border: none;
        transform: translateY(-100%) rotate(-90deg);
        
`
export const PreviousButton=styled.button`
        position: absolute;
        top:50%;
        left:-70px;
        z-index: 3;
        background: none;
        border: none;
        transform: translateY(-100%) rotate(90deg);

        @media (max-width: 600px) {
            left:-50px;
        } 
        
`

export const Slide=styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top:0;
    left: 0;
    width:100%;
    opacity: 0;
    z-index: -2;
    transform: translateY(200px);
    transition: 2s ease opacity, 1s  cubic-bezier(0.075, 0.82, 0.165, 1) transform ;
    
    .ship-image
    {
        transform: translateX(-100px) rotate(5deg);
        opacity: 0;
        transition: 2s ease opacity, 1s  cubic-bezier(0.075, 0.82, 0.165, 1) transform ;
    }

    &.active{
        z-index: 1;
        transform: translateY(0);
        opacity:1;

        .ship-image
        {
            transform: translateX(0) rotate(0);
            opacity: 1;
        }
        
    }
`