const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0] //o zero é porque o livroFiltrado vai sempre retornar um unico elemento que é indice 0 do array
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceItemModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceItemModificado], ...modificacoes}
    
    livrosAtuais[indiceItemModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivro(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    let novaListaDeLivros = livros.filter(livro => livro.id !== id)
    
    fs.writeFileSync('livro.json', JSON.stringify(novaListaDeLivros), null, 2)
    return novaListaDeLivros;
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}