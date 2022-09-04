import Icon from "../Icon/Icon";
import { CardHeader, ContainerLogo, WrapperHeader } from "./Header.style";

export default function Header() {
  return (
    <WrapperHeader>
      <CardHeader>
        <h1>Jogo da Velha</h1>
        <h6>Criado por: Gabriel Figueiredo</h6>
      </CardHeader>
      <ContainerLogo>
        <Icon
          iconName="github"
          link={"https://github.com/GabrielCFigueiredo"}
        />
      </ContainerLogo>
    </WrapperHeader>
  );
}
