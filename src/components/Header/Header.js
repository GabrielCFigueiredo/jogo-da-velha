import Icon from "../Icon/Icon";
import { ContainerLogo, WrapperHeader } from "./Header.style";

export default function Header() {
    
    return (
        <WrapperHeader>
            <h1>Jogo da Velha</h1>
            <h6>Criado por: Gabriel Figueiredo</h6>
            <ContainerLogo>
                <Icon iconName="github" link={"https://github.com/GabrielCFigueiredo"}/>
            </ContainerLogo>
        </WrapperHeader>
    )
}