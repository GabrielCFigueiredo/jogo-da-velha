import styled from "styled-components";
import Button from "../Button/Button";
import { ContainerPlayer } from "../Game/Game.styles";
import Icon from "../Icon/Icon";

export default function GameInfo({ current, winner, onReset, draw }) {
  const shouldEnableButton = () => {
    if (winner !== 0) return true;
    if (draw) {
      return true;
    }
  };

  return (
    <ContainerPlayer>
      {!draw && winner === 0 && (
        <Card>
          <CardPlayer>
            <h4>Proximo a jogar:</h4>
          </CardPlayer>
          <div>
            {current === 1 && <Icon iconName={"circle"} />}
            {current === -1 && <Icon iconName={"x"} />}
          </div>
        </Card>
      )}

      {!draw && winner !== 0 && (
        <>
          <h4>Jogador Vencedor:</h4>
          {winner === 1 && <Icon iconName={"circle"} />}
          {winner === -1 && <Icon iconName={"x"} />}
        </>
      )}
      {draw && <h4>EMPATE</h4>}

      <Button onClick={onReset} disabled={!shouldEnableButton()}>
        Reiniciar
      </Button>
    </ContainerPlayer>
  );
}

const Card = styled.div `  
width: 100vw;
display: grid;
place-items: center;
gap: 16px;

`

const CardPlayer = styled.div `  
display: grid;
place-items: center;

`