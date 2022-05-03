
import Icon from "../Icon/Icon";
import { ContainerIcon, ContainerScore, WrapperScore } from "./Score.styles";

export default function Score({ winnerCircle, winnerX }) {

    return (
        <WrapperScore>
            <div>
                <h2>Placar:</h2>
            </div>
            <ContainerScore>
                <ContainerIcon>
                    <Icon iconName={"circle"} />
                    <h1>{winnerCircle}</h1>
                </ContainerIcon>
                <ContainerIcon>
                    <Icon iconName={"x"} />
                    <h1>{winnerX}</h1>
                </ContainerIcon>
            </ContainerScore>
        </WrapperScore>
    )
}