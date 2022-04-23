import { useState } from "react";
import GameOption from "../GameOption/GameOption";
import Icon from "../Icon/Icon";
import { ContainerGame, ContainerPlayer, WrapperGame } from "./Game.styles";

export default function Game() {

    const [game, setGame] = useState(Array(9).fill(0))
    const [current, setCurrent] = useState(1)

    const handleClick = (pos) => {
        if (!game[pos]) {
            const newGame = [...game]
            newGame[pos] = current
            setCurrent(current * -1)
            setGame(newGame)
            console.log(newGame);
        }

    }

    return (
        <WrapperGame>
            <ContainerGame>
                {
                    game.map((value, pos) => <GameOption
                        key={pos}
                        status={value}
                        onClick={() => handleClick(pos)}
                    />
                    )
                }
            </ContainerGame>
            <ContainerPlayer>
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

            </ContainerPlayer>

        </WrapperGame>
    )
}