const express = require("express");
const app = express();

// Setando Express para usar o EJS como View engine
app.set("view engine","ejs");


app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Fontana",
        inscritos: 1246,
    }); //pega automatico o arquivo index na pasta Views, não precisando botar o vaminho "view/index". nem a extrensão precisa.
});

app.listen(8080,() => {
    console.log("Aplicação rodando!");
});