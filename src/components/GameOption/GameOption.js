import Icon from "../Icon/Icon";
import { WrapperGameOption } from "./GameOption.styles";

export default function GameOption({ status, onClick, isWinner, isDraw }) {

    return (
        <WrapperGameOption
            winner={isWinner}
            draw={isDraw}
            onClick={onClick}>
            {
                status === 1 && <Icon iconName={"circle"} />
            }
            {
                status === -1 && <Icon iconName={"x"} />
            }

        </WrapperGameOption>
    )
}