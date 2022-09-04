import styled from "styled-components";

export const WrapperGame = styled.div` 

display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
gap: 16px;  
width: 99vw;
height: 100%;


`
export const Container = styled.div `  

display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
gap: 16px;  
width: 30%;
height: 50%;

@media (max-width: 400px) {

flex-direction: column; 
height: 60%;
}
`
export const ContainerGame = styled.div`  

display: grid;
place-items: center;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
min-width: 170px;
@media (max-width: 400px) {

margin-top: -40px;
}
`
export const ContainerPlayer = styled.div`  

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
`