import styled from "styled-components";
import Game from "../src/components/Game/Game";
import Header from "../src/components/Header/Header";




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




const Wrapper = styled.div` 

display: grid;
place-items: center;
max-width: 100vw;
max-height: 100vh;
`

const Container = styled.div`  

display: grid;
place-items: center;
gap: 16px;
height: 60%;
width: 100%;
` 