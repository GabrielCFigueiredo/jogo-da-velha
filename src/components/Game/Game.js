import { useState, useEffect } from "react";
import GameInfo from "../GameInfo/GameInfo";
import GameOption from "../GameOption/GameOption";
import Score from "../Score/Score";

import { Container, ContainerGame, WrapperGame } from "./Game.styles";

export default function Game() {

    const [game, setGame] = useState(Array(9).fill(0))
    const [current, setCurrent] = useState(-1)
    const [winner, setWinner] = useState(0)
    const [winnerLine, setWinnerLine] = useState([])
    const [draw, setDraw] = useState(false)
    const [winnerCircle, setWinnerCircle] = useState(0)
    const [winnerX, setWinnerX] = useState(0)

    const tableWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
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
            const values = line.map((pos) => game[pos])
            const sun = values.reduce((sun, value) => sun + value)
            if (sun === 3 || sun === -3) {
                setWinner(sun / 3)
                setWinnerLine(line)
                sun > 0 ? setWinnerCircle(winnerCircle + 1) : setWinnerX(winnerX + 1)
            }
        })
    }



    const verifyWinnerLine = (pos) => winnerLine.find((value) => value === pos) !== undefined

    const handleReset = () => {
        setGame(Array(9).fill(0))
        setWinner(0)
        setWinnerLine([])
        setDraw(false)
    }

    const verifyDraw = () => {
        if (game.filter((value) => value === 0).length === 0)
            setDraw(true)
    }

    useEffect(() => {
        if (winner !== 0) {
            setDraw(false)
        }
    }, [winner])


    useEffect(() => {

        setCurrent(current * -1)
        verifyWinner()
        verifyDraw()
    }, [game])

    return (
        <WrapperGame>
            <Score
                winnerCircle={winnerCircle}
                winnerX={winnerX}
            />
            <Container>
                <ContainerGame>
                    {
                        game.map((value, pos) => <GameOption
                            key={pos}
                            status={value}
                            onClick={() => handleClick(pos)}
                            isWinner={verifyWinnerLine(pos)}
                            isDraw={draw}
                        />
                        )
                    }
                </ContainerGame>
                <GameInfo
                    current={current}
                    winner={winner}
                    onReset={handleReset}
                    draw={draw}
                />
            </Container>


        </WrapperGame>
    )
}