import styled from "styled-components";
import Game from "../src/components/Game/Game";
import Header from "../src/components/Header/Header";
import { Container, Wrapper } from "./index.styles";



export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Game />
      </Container>
    </Wrapper>

  )
}




Wrapper = styled.div` 

display: grid;
place-items: center;
max-width: 100vw;
max-height: 100vh;
`

Container = styled.div`  

display: grid;
place-items: center;
gap: 16px;
height: 60%;
width: 100%;
` 