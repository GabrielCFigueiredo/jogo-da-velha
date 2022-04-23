import { useState, useEffect } from "react";
import GameOption from "../GameOption/GameOption";
import Icon from "../Icon/Icon";
import { ContainerGame, ContainerPlayer, WrapperGame } from "./Game.styles";

export default function Game() {

    const [game, setGame] = useState(Array(9).fill(0))
    const [current, setCurrent] = useState(-1)
    const [winner, setWinner] = useState(0)

    const tableWinner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const handleClick = (pos) => {
        if (!game[pos] && winner === 0) {
            const newGame = [...game]
            newGame[pos] = current
            setGame(newGame)
        }

    }

    const verifyWinner = () => {
        tableWinner.forEach((line) => {
            const values = line.map((pos) => game[pos] )
            const sun = values.reduce((sun, value) => sun + value)
            if (sun === 3 || sun === -3) {
                setWinner(sun / 3)
            }
        })
    }

    useEffect(() => {

        setCurrent(current * -1)
        verifyWinner()
    },[game])

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