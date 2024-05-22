const { error } = require("console");
const fs = require("fs");

modificarUsuario("Canhão", "BOOOMM!!!", "Não")

function modificarUsuario(nome, curso, categoria) {
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (error, dados) => {
        if(error){
            console.log("Um erro aconteceu X( ");
        } else {
            var conteudo = JSON.parse(dados); //texto para objeto javascript (JSON)
    
            conteudo.nome = nome;
            conteudo.descricao = curso;
            conteudo.estudante = categoria;
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (error) => { // JSON para texto
            if (error){
                console.log("Deu erro");
            }
            
            }); 
    
        }
    
    });
}