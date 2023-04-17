import styled from "styled-components";

export const Box=styled.div`
    
    display:${({flex,display})=>flex ? "flex" : display ? display : "block"};
    ${({items})=>items && `align-items: ${items};`}
    ${({content})=>content && `align-items: ${content};`}
    ${({gap})=>gap && `gap: ${gap};`}

    ${({px})=>px && `padding-inline: ${px};`}
    ${({py})=>py && `padding-block: ${py};`}

    ${({mx})=>mx && `margin-inline: ${mx};`}
    ${({my})=>my && `margin-block: ${my};`}
`