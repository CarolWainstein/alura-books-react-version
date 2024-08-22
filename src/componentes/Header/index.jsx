import { Link } from "react-router-dom";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

// Componente estilizado para remover os estilos padrão dos links
const StyledLink = styled(Link)`
    text-decoration: none; // Remover sublinhado
    color: inherit; // Herdar a cor do texto do contêiner pai
    &:hover {
        text-decoration: none; // Remover sublinhado ao passar o mouse
    }
`

function Header() {
  return (
      <HeaderContainer>
        <StyledLink to="/"> 
          <Logo />
        </StyledLink>
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
  );
}

export default Header