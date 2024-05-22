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

console.log("Título do filme: "+ vingadores.titulo);
console.log("Ano de lançamento: "+ vingadores.ano);

vingadores.Reperoduzir();

var homemAranha = new Filme();

console.log("Título do filme: "+ homemAranha.titulo);
console.log("Ano de lançamento: "+ homemAranha.ano);

homemAranha.Avancar();

var starWars = new Filme();

console.log("Título do filme: "+ starWars.titulo);
console.log("Ano de lançamento: "+ starWars.ano);

starWars.Pausar();
starWars.Avancar();
starWars.Fechar();