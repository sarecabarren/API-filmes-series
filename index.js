// Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()
 
// Vai permitir que aceite JSON na requisição
app.use(express.json())
 
const filmes = [
    {
        id: 1,
        description: "Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor sofre um acidente e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com a guerra, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.",
        title: "Mulher Maravilha",
        genre:"Ação/Guerra",
        image:"https://woomagazine.com.br/wp-content/uploads/2017/06/18836594_1913129415597816_3769617179492701782_o.jpg",
        releaseYear:2017
    },
]
 
 
// buscacr pelo id
 
app.get("/filmes/:id", function(req, res){
    const id = parseInt(req.params.id) // Vai fazer o query paramter retornar o id como texto e não como número
 
    const filmes = filmes.find(a => a.id == id)
 
     // Se a variável for nula, é falso, e se tiver alguma coisa é verdadeira
    if (filmes){
        return res.json(filmes)
    } else {
        res.status(404).json("Filme não encontrado")
    }
})

// filtrar por genero

app.get("/filmes", function (req, res) {
    const genre = parseInt(req.query.genre)
 
    if (!genre) {
        return res.json(filmes)
    }
 
    const filmesFiltrados = filmes.filter(p => p.genre === genre)
 
    res.json(filmesFiltrados)
})

// criar um novo postman

app.post("/filmes", function (req, res) {
    const tituloNovo = req.body.title
    const descricaoNova = req.body.description
    const generoNovo = req.body.genre
    const imagemNova = req.body.image
    const dataLancamento = req.body.releaseYear
   
 
    if (!tituloNovo || !descricaoNova || !generoNovo || !dataLancamento || !imagemNova) {
        return res.status(400).json({ erro: "algo invalido" })
    }
 
    
    const filmeNovo = {
        id: 2,
        description:descricaoNova,
        title:tituloNovo,
        genre:generoNovo,
        image:imagemNova,
        releaseYear:dataLancamento
    }  
   
    filmes.push(filmeNovo)
    res.status(201).send()
})

app.put("/filmes/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const indexFilmes = filmes.findIndex(a => a.id == id)
 
    if (indexFilmes === -1) {
        return res.status(404).json("filme não encontrado")
    }
  
    filmes[indexFilmes].description = description
    filmes[indexFilmes].title = title
    filmes[indexFilmes].genre = genre
    filmes[indexFilmes].image = image
    filmes[indexFilmes].releaseYear = releaseYear
 
    return res.json(filmes[indexFilmes])
 
})






// series
 
 
const series = [
    {
        id: 1,
        description: "Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
        title: "Stranger Things",
        genre: "Suspense/Ficção científica",
        image: "https://objetos-xlk.estaticos-marca.com/uploads/2025/06/01/683c6c8fbb926.jpeg",
        releaseYear: 2016
     }
]


app.get("/series/:id", function(req, res){
    const id = parseInt(req.params.id) 
 
    const serie = serie.find(a => a.id == id)
 
    if (serie){
        return res.json(serie)
    } else {
        res.status(404).json("serie não encontrada ")
    }
})


app.get("/series", function (req, res) {
    const genre = parseInt(req.query.genre)
 
    if (!genre) {
        return res.json(series)
    }
 
    const seriesFiltradas = series.filter(p => p.genre === genre)
 
    res.json(seriesFiltradas)
})


app.post("/series", function (req, res) {
    const tituloNovo = req.body.title
    const descricaoNova = req.body.description
    const generoNovo = req.body.genre
    const imagemNova = req.body.image
    const dataLancamento = req.body.releaseYear
   
 
    if (!tituloNovo || !descricaoNova || !generoNovo || !dataLancamento || !imagemNova) {
        return res.status(400).json({ erro: "titulo, descrição, genero, imagem ou data invalida" })
    }

    if (title.Length <= 1)
        return "o titulo do filme deve ser maior que um caractere"
 
    
    const serieNova = {
        id: 2,
        description:descricaoNova,
        title:tituloNovo,
        genre:generoNovo,
        image:imagemNova,
        releaseYear:dataLancamento
    }  
   
    series.push(serieNova)
    res.status(201).send()
})

app.put("/series/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const indexSeries = Series.findIndex(a => a.id == id)
 
    if (indexSeries === -1) {
        return res.status(404).json("Serie não encontrada")
    }
  
    series[indexSeries].description = description
    series[indexSeries].title = title
    series[indexSeries].genre = genre
    series[indexSeries].image = image
    series[indexSeries].releaseYear = releaseYear
 
    return res.json(series[indexSeries])
 
})

 



// colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})