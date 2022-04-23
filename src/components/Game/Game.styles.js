import styled from "styled-components";

export const WrapperGame = styled.div ` 

display: flex;
justify-content: space-between;
width: 500px;
`
export const ContainerGame = styled.div `  

display: grid;
place-items: center;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
`
export const ContainerPlayer = styled.div `  

display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`