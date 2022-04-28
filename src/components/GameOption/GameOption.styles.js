import styled from "styled-components";

export const WrapperGameOption = styled.div`  

border: ${props => (props.winner ? "2px solid #00eeff" : "2px solid #ffff")} ;
border: ${props => (props.draw ? "2px solid #EBFC00" : "2px solid #ffff")} ;
width: 50px;
height: 50px;
display: grid;
place-items: center;

`