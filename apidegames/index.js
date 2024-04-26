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

app.get("/games", (req,res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.get("/game/:id", (req,res) => {
    
    if(isNaN(req.params.id)){
        res.sendStatus(400);  
    } else {
        
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if (game != undefined){
            res.statusCode = 200;
            res.json(game)
        }else{
            res.sendStatus(404)
        }

    }

});

app.post("/game",(req,res) => {
    var {title, price, year} = req.body;

    if (!isNaN(title) || title == undefined){
        res.sendStatus(400);
    }
    if (isNaN(price) || price == undefined){
        res.sendStatus(400);
    }
    if (isNaN(year) || year == undefined){
        res.sendStatus(400);
    }

    DB.games.push({
        id: 65,
        title,
        price,
        year,
    });

    res.sendStatus(200);
});

// metodo delete não é acessivel pelo navegador nem formularios, e sim com requisições diretas por bibliotecas como Axios, Ajax, FatAPI do Js, etc.
app.delete("/game/:id", (req,res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);  
    } else {
        
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }

    }

});

app.put("/game/:id", (req,res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);  
    } else {
        
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if (game != undefined){
            
                var {title, price, year} = req.body;

                if (isNaN(title) || title == undefined){
                    game.title = title;
                }
                if (!isNaN(price) || price == undefined){
                    game.price = price;
                }
                if (!isNaN(year) || year == undefined){
                    game.year = year;
                }

                res.sendStatus(200);

        }else{
            res.sendStatus(404)
        }

    }


});

app.listen(8080,() => {
    console.log("API RODANDO!");
});