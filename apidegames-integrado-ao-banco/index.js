const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

const Games = require("./database/Games");
const { where } = require("sequelize");

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// View engine
app.set('view engine','ejs');

//config bootstrap5 pra ser estatico
// app.use(express.static("node_modules/bootstrap/dist/"));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

// Static
app.use(express.static('public/assets/images'));

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

app.get("/", (req,res) => {

    Games.findAll({
        order:[['id','DESC']],
    }).then((game) => {
        res.render("index", {game: game});

    }).catch((err) => {
        res.sendStatus(500);

    });
});

app.get("/games", (req,res) => {
    res.render("games");
});

app.post("/game",(req,res) => {
    var {title, price, year} = req.body;

    if (title != undefined && price != undefined && year != undefined){
        Games.create({
            title: title,
            year: year,
            price:  Math.round(price),
        }).then(() => {
            res.redirect("/");
        })

    }else{
        res.sendStatus(400);
    }

});

// metodo delete não é acessivel pelo navegador nem formularios, e sim com requisições diretas por bibliotecas como Axios, Ajax, FatAPI do Js, etc.
app.post("/game/delete", (req, res) => {
    var id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){
            connection.query(`delete "games" where "id" = ${id}`)
            res.redirect("/");
        }else{
            res.redirect("/");
        }
    }else{
        res.redirect("/");
    }
});

app.get("/game/:id", (req,res) => {
    var id = req.params.id;
    
    if(!isNaN(id)){
        
        Games.findById(id).then(game => {
        if (game != undefined){
            res.render("edit",{game: game});
            
        }else{
            res.redirect("/");
        }
        }).catch(erro => {
            res.redirect("/");
        })

    }else{
        res.redirect("/");
    }
});

app.post("/game/update", (req,res) => {
    var {id, title, price, year} = req.body;

    Games.update({title: title, price: Math.round(price), year: year},{
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(8080,() => {
    console.log("API RODANDO!");
});