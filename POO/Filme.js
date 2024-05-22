class Filme {

    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    Reperoduzir(){
        console.log("Rodando...")
    }

    Pausar(){
        console.log("Parando...")
    }

    Avancar(){
        console.log("Avançando...")
    }

    Fechar(){
        console.log("Fechando...")
    }

}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h" );

console.log(vingadores.titulo);
console.log(vingadores.ano);
console.log(vingadores.genero);

var batman = new Filme("Batman",2009,"Ação","Alguem2","1:50m");

console.log(batman.titulo);
console.log(batman.ano);
console.log(batman.genero);