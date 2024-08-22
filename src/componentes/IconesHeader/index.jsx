import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from 'styled-components';

const IconeLista = styled.ul `
  display: flex;
  align-items: center;
`

const IconeListaItem = styled.li `
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <IconeLista>
      {icones.map((icone) => (
        <IconeListaItem>
          <img src={icone} alt="icone" />
        </IconeListaItem>
      ))}
    </IconeLista>
  );
}

export default IconesHeader