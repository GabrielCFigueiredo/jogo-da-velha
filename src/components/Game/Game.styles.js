import styled from "styled-components";

export const WrapperGame = styled.div ` 

display: flex;
justify-content: space-between;
align-items: center;
gap: 16px;  
width: 350px;
height: 500px;
@media (max-width: 400px) {

flex-direction: column; 
}

`
export const ContainerGame = styled.div `  

display: grid;
place-items: center;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
min-width: 170px;
`
export const ContainerPlayer = styled.div `  

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
`