import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OpcaoListaItem = styled.li `
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`
const OpcaoLista = styled.ul`
  display: flex;
`

const StyledLink = styled(Link)`
    text-decoration: none; // Remover sublinhado
    color: inherit; // Herdar a cor do texto do contêiner pai
    &:hover {
        text-decoration: none; // Remover sublinhado ao passar o mouse
    }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  return (
    <OpcaoLista>
      {textoOpcoes.map((texto) => (
        <StyledLink to={`/${texto.toLocaleLowerCase}`}>
          <OpcaoListaItem>
            <p>{texto}</p>
          </OpcaoListaItem>
        </StyledLink>
      ))}
    </OpcaoLista>
  );
}

export default OpcoesHeader