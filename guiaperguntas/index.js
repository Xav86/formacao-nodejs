const express = require("express");
const app = express();

// Setando Express para usar o EJS como View engine
app.set("view engine","ejs");
app.use(express.static('public'));


app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Chocolate", preco: 5.5},
        {nome: "Guarana", preco: 6},
        {nome: "Leite-condensado", preco: 5},
        {nome: "Carne", preco: 15},
        {nome: "Nescau", preco: 7},
        {nome: "Cerveja", preco: 5.5}
    ]
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Fontana",
        inscritos: 1246,
        msg: exibirMsg,
        produtos: produtos,
    }); //pega automatico o arquivo index na pasta Views, não precisando botar o vaminho "view/index". nem a extrensão .ejs precisa.
});

app.listen(8080,() => {
    console.log("Aplicação rodando!");
});