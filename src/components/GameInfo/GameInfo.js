import Button from "../Button/Button";
import { ContainerPlayer } from "../Game/Game.styles";
import Icon from "../Icon/Icon";

export default function GameInfo({current, winner, onReset}) {

    const shouldEnableButton = () => {
        if (winner !== 0) return true
    }
    return (
        <ContainerPlayer>

            {
                winner === 0 && 
                <>
                <h4>
                    Proximo a jogar:
                </h4>
                <div>
                    {
                        current === 1 && <Icon iconName={"circle"} />
                    }
                    {
                        current === -1 && <Icon iconName={"x"} />
                    }
                </div>
                </>
            }
            {
                winner === 1 && 
                <>
                <h4>
                    Jogador Vencedor:
                </h4>
                <div>  
                    <Icon iconName={"circle"} /> 
                </div>
                </>
            }
            {
              winner === -1 && 
              <>
              <h4>
                  Jogador Vencedor:
              </h4>
              <div>  
                  <Icon iconName={"x"} /> 
              </div>
              </>  
            }
             <Button
              onClick={onReset} 
              disabled={!shouldEnableButton() }
              >
                 Reiniciar
                 </Button>   

            </ContainerPlayer>
    )
}