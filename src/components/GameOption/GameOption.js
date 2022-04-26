import Icon from "../Icon/Icon";
import { WrapperGameOption } from "./GameOption.styles";

export default function GameOption({status, onClick, isWinner}) {
    
    return (
        <WrapperGameOption
        winner={isWinner}
        onClick={onClick}>
            {
                status === 1 && <Icon  iconName={"circle"} />
            }
            {
                status === -1 && <Icon  iconName={"x"}/>
            }
            
        </WrapperGameOption>
    )
}