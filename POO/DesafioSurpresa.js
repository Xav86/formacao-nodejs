// Desafio de criar muitas classes com o principio da abstração ja visto durante o curso

class ProdutoLoja{

    constructor(){
        this.nome = '';
        this.preco = '';
        this.quantidade = '';
        this.categoria = '';
        this.prateleira = '';

    }

    Pegar(){
        console.log("pegando...")
    }

    Comparar(){
        console.log("comparando...")
    }

    Devolver(){
        console.log("devolvendo...")
    }

    Guardar(){
        console.log("guardando...")
    }

    Roubar(){
        console.log("não...")
    }

}

class CarrinhoCompras{

    constructor(){
        this.produtos = '';
        this.categoria = '';
        this.preco = '';
        this.quantidade = '';

    }

    Comparar(){
        console.log("comparando...")
    }

    AlterarQuantidade(){
        console.log("alterando quantidade...")
    }

    Retirar(){
        console.log("retirando...")
    }

    Adicionar(){
        console.log("adicionando...")
    }

    AplicarCupom(){
        console.log("Adicionando Cupom...")
    }

}

class Cardapio{

    constructor(){
        this.nome = '';
        this.quantidade = '';
        this.categoria = '';
        this.preco = '';

    }

    Comparar(){
        console.log("comparando...")
    }

    Pedir(){
        console.log("pedindo...")
    }

    AvancarPagina(){
        console.log("avançando a pagina...")
    }

    VoltarPagina(){
        console.log("voltando a pagina...")
    }

}