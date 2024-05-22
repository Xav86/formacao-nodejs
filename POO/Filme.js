class Filme {

    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
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

var vingadores = new Filme();

vingadores.titulo = "Vingadores 2";
vingadores.ano = "2014";
vingadores.genero = "Ação";

console.log(vingadores.titulo);
console.log(vingadores.ano);
console.log(vingadores.genero);

var batman = new Filme();

batman.titulo = "Batman";
batman.ano = "2009";
batman.genero = "Ação";

console.log(batman.titulo);
console.log(batman.ano);
console.log(batman.genero);