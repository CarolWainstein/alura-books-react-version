import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favorito";
import livroImg from '../../imagens/livro.png';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
    font-size: 26px;
  }

  img {
    width: 200px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros() {
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
  }

  const [textoDigitado, setTextoDigitado] = useState("");

  const handleChange = (evento) => {
    const texto = evento.target.value;
    setTextoDigitado(texto);

    const textoDigitado = evento.target.value;
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
    );
    setLivrosPesquisados(resultadoPesquisa);
  };

  async function insertFavoritos(id) {
    await postFavorito(id)
    alert(`Livro inserido.`)
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={handleChange}
        value={textoDigitado}
      />
      {textoDigitado &&
        livrosPesquisados.length > 0 &&
        livrosPesquisados.map((livro) => (
          <Resultado onClick={() => insertFavoritos(livro.id)} key={livro.id}>
            <img src={livroImg} alt="livro" />
            <p>{livro.nome}</p>
          </Resultado>
        ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
