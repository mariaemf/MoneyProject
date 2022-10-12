import logoImg from "../../Assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton> Nova Transação </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
