import { livros } from "../Pesquisa/dadosPesquisa";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import livro2 from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%; /* Defina a largura como 100% */
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%; /* Defina a largura como 100% */
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00">ÚLTIMOS LANCAMENTOS</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="livro" />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo= "Talvez você se interesse por:"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma google"
        img={livro2}
    />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
