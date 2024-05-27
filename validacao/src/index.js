const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser("-bs%#etghbse34n_iu¨$675re"))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());

// ------------------

app.get("/",(req, res) => {

    var emailError = req.flash("emailError");
    var idadeError = req.flash("idadeError");
    var nomeError = req.flash("nomeError");
    var email = req.flash("email");
    var nome = req.flash("nome");
    var idade = req.flash("idade");

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    idadeError = (idadeError == undefined || idadeError.length == 0) ? undefined : idadeError;
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;
    email = (email == undefined || email.length == 0) ? "" : email;
    nome = (nome == undefined || nome.length == 0) ? "" : nome;
    idade = (idade == undefined || idade.length == 0) ? "" : idade;

    res.render("index",{emailError,idadeError,nomeError, email: email, nome: nome, idade: idade})
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
        req.flash("emailError",emailError);
        req.flash("idadeError",idadeError);
        req.flash("nomeError",nomeError);

        req.flash("email", email);
        req.flash("nome", nome);
        req.flash("idade", idade);

        res.redirect("/");
    } else {
        res.send("Formulario show da bola");
    }

});

app.listen(7324, (req, res) => {
    console.log("Servidor iniciado");
});