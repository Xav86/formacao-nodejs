const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("express-flash");

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(flash());

// ------------------

app.get("/",(req, res) => {
    res.render("index")
});

// ---------------- Formulario ----------------

app.post("/form", (req, res) => {
    var {email, nome, idade} = req.body;

    var emailError;
    var idadeError;
    var nomeError;

    if (email == undefined || email == "") {
        emailError = "O e-mail não pode ser vazio";
    }

    if (idade == undefined || idade == "" || idade < 18) {
        idadeError = "A idade não pode ser vazia";
    }

    if (nome == undefined || nome == "") {
        nomeError = "O nome não pode ser vazio";
    }

    if (nome.length < 3) {
        nomeError = "Numero de caracteres insuficientes";
    }

    if(emailError != undefined || idadeError != undefined || nomeError != undefined) {
        res.redirect("/");
    } else {
        res.send("Formulario show da bola");
    }

});

app.listen(7324, (req, res) => {
    console.log("Servidor iniciado")
});