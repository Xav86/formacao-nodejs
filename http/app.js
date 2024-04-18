var http = require("http"); 

http.createServer(function(requisicao,resposta){
    resposta.end('<h1>Bem Vindo ao meu servidor!</h1>')
}).listen(8080)

console.log("Servidor rodando!")