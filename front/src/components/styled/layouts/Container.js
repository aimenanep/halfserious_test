import styled from "styled-components";

export const Container=styled.div`
    padding-inline: 20px;
    display:${({flex,display})=>flex ? "flex" : display ? display : "block"};
    ${({items})=>items && `align-items: ${items};`}
    ${({content})=>content && `align-items: ${content};`}
    ${({gap})=>gap && `gap: ${gap};`}
`