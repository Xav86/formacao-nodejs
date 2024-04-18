const express = require("express"); // importando o express
const app = express(); // iniciando o express

app.get("/",function(req,res){
    res.send("<h2>Bem vindo ao meu site! sinta-se a vontade &#128511;</h2>"); // não pode enviar mais de uma resposta E não pode deixar de enviar
});

app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
        
    }else{
        res.send("Bem vindo ao meu blog!!");

    }

});

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Bem vindo ao meu canal!</h1> <br> &#128511;");
});

app.get("/ola/:nome/:empresa",function(req,res){
    //REQ => DADOS ENVIADOS PELO USUÁRIO (ABREVIAÇÃO DE REQUISIÇÃO)
    //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO (ABREVIAÇÃO DE RESPOSTA)
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da " + empresa + "</h1>")
});


app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})