import styled from "styled-components";

export const WrapperGameOption = styled.div`  

background-color: ${props => (props.winner ? "#00eeff" : "#000")};
border: ${props => (props.draw ? "2px solid #EBFC00" : "2px solid #ffff")};
width: 50px;
height: 50px;
display: grid;
place-items: center;
`