import styled from "styled-components";

export const WrapperGameOption = styled.div `  

border: ${props => (props.winner ? "2px solid #00eeff" : "2px solid #ffff")} ;
width: 50px;
height: 50px;
display: grid;
place-items: center;

`
export const Winner = styled.div ` 

border: 2px solid #00eeff;
`