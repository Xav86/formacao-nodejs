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