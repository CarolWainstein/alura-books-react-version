const express = require('express');
const cors = require('cors');
const rotaLivro = require("./Rotas/livro")
const rotaFavorito = require("./Rotas/favorito")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
    console.log('funcionando')
})