const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const connection = require("./database/database")

// const Games = require("./database/Games");

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
// connection
//     .authenticate()
//     .then(() => {
//         console.log("Conexão feita com sucesso!");
//     }).catch((error) => {
//         console.log(error);
//     })

var DB = {

    games: [
        {
            id:1,
            title: "Terraria",
            year: 2011,
            price: 20,
        },
        {
            id:23,
            title: "Sea of thieves",
            year: 2018,
            price: 50,
        },
        {
            id:11,
            title: "Minecraft",
            year: 2009,
            price: 110,
        },

    ]

}

app.get("/", (req,res) => {
    console.log("nada");
})

app.listen(8080,() => {
    console.log("API RODANDO!");
});