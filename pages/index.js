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
