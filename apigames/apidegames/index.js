const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "to-o97mgw3ekihsbflkszbvfjlkdfm"

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next){

    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret, (error, data) => {
            if (error){
                res.status(401);
                res.json({error:"Token inválido"});
            } else {

                req.token = token;
                req.loggedUser = {id: data.id, email: data.email}
                req.teste = "sim, isso é um teste"
                next();
            }
        })

    } else {
        res.status(401);
        res.json({error: "Token inválido!"})
    }

}


var DB = {
    games: [
        {
            id: 23,
            title: "Terraria",
            year: 2011,
            price: 20
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Gustavo Gonçalves",
            email: "gustavo@gustavo.com",
            password: "poggers",
        },
        {
            id: 2,
            name: "Calebe Arlan",
            email: "calebe@calebe.com",
            password: "noggers",
        }
    ]
}

app.get("/games", auth, (req, res) => {
    res.statusCode = 200;
    res.json({teste: req.teste, user: req.loggedUser, games: DB.games});
});

app.get("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/game", auth,(req, res) => { 
    var {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
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

app.put("/game/:id", auth,(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});

app.post("/auth", (req, res) => {

    var {email, password} = req.body;

    if(email != undefined){
        
        var user = DB.users.find(u => u.email == email);

        if(user != undefined){

            if(user.password == password){

                jwt.sign({id: user.id, email: user.email},JWTSecret,{expiresIn:'48h'},(error, token) => {
                    if(error){
                        res.status(400);
                        res.json({error: "Falha interna"});
                    } else {
                        res.status(200);
                        res.json({token: token})
                    }
                });
            } else {
                res.status(401);
                res.json({error: "Senha ou usuário inválido"});
            }

        } else {
            res.status(404);
            res.json({error: "O E-mail enviado é não foi encontrado no banco de dados!"});
        }

    } else {
        res.status = (400);
        res.json({error: "O E-mail enviado é inválido!"});
    }

});

app.listen(8080,() => {
    console.log("API RODANDO!");
});