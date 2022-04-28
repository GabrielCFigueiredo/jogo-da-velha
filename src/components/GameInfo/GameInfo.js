import Button from "../Button/Button";
import { ContainerPlayer } from "../Game/Game.styles";
import Icon from "../Icon/Icon";

export default function GameInfo({ current, winner, onReset, draw }) {

    const shouldEnableButton = () => {
        if (winner !== 0) return true
        if (draw) {
            return true
        }
    }

    return (
        <ContainerPlayer>

            {
                !draw && winner === 0 &&
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
                !draw && winner !== 0 &&
                <>
                    <h4>
                        Jogador Vencedor:
                    </h4>
                    {
                        winner === 1 && <Icon iconName={"circle"} />
                    }
                    {
                        winner === -1 && <Icon iconName={"x"} />
                    }
                </>
            }
            {
                draw && <h4>empate</h4>
            }

            <Button
                onClick={onReset}
                disabled={!shouldEnableButton()}
            >
                Reiniciar
            </Button>

        </ContainerPlayer>
    )
}