import { useState } from "react";
import GameOption from "../GameOption/GameOption";
import { WrapperGame } from "./Game.styles";

export default function Game() {

    const [game, setGame] = useState(Array(9).fill(0))
    console.log(game);
    return (
        <WrapperGame>
            {
                game.map((value, pos) => <GameOption
                    key={pos}
                    status={value}
                    />
                )
            }
            
        </WrapperGame>
    )
}