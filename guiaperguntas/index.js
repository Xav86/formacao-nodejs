const express = require("express");
const app = express();

// Setando Express para usar o EJS como View engine
app.set("view engine","ejs");
app.use(express.static('public'));
// app.use(express.static("node_modules/bootstrap/dist/"));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));


app.get("/",(req,res) => {
    res.render("index");//pega automatico o arquivo index na pasta Views, não precisando botar o vaminho "view/index". nem a extrensão .ejs precisa.

});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

app.listen(8080,() => {
    console.log("Aplicação rodando!");
});