const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const { where } = require("sequelize");

//Database - chamando a conexão

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

// Setando Express para usar o EJS como View engine
app.set("view engine","ejs");
app.use(express.static('public'));

//config bootstrap5 pra ser estatico
// app.use(express.static("node_modules/bootstrap/dist/"));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req,res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id','DESC'] //ASC = Crescence || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    }); // Pergunta.findAll = SELECT * FROM perguntas
    //pega automatico o arquivo index na pasta Views, não precisando botar o vaminho "view/index". nem a extrensão .ejs precisa.
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    Pergunta.create({
        titulo: titulo,
        descricao: descricao,
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id",(req,res) =>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if (pergunta != undefined){ //tem uma pergunta
            res.render("pergunta",{
                pergunta: pergunta
            });
        }else{ //não tem uma pergunta
            res.redirect("/");
        }
    });
});

app.listen(8080,() => {
    console.log("Aplicação rodando!");
});