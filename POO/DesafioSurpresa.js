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

class Personagem{

    constructor(){
        this.nome = '';
        this.idade = '';
        this.classe = '';
        this.status = {
            forca: '',
            inteligencia: '',
            agilidade: '',
        };

    }

    Andar(){
        console.log("andando...")
    }

    Atacar(){
        console.log("atacando...")
    }

    Pular(){
        console.log("pular...")
    }

    Falar(){
        console.log("falando...")
    }

}

class AlugaCarros{

    constructor(){
        this.nome = '';
        this.categoria = '';
        this.preco = '';
        this.ano = '';

    }

    Alugar(){
        console.log("alugar...")
    }

    Pagar(){
        console.log("pagando...")
    }

    ReAlugar(){
        console.log("alugando mesmo carro de novo...")
    }

    TrocarCarro(){
        console.log("alugando outro carro...")
    }

}

class UserRedeSocial{

    constructor(){
        this.nome = '';
        this.idade = '';
        this.seguidores = '';
        this.seguindo = '';
        this.postagens = '';

    }

    Postar(){
        console.log("postando...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

}

class VideoStreaming{

    constructor(){
        this.nome = '';
        this.duracao = '';
        this.curtidas = '';
        this.comentarios = '';

    }

    Postar(){
        console.log("postando...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

}

class AlunoEscola{

    constructor(){
        this.nome = '';
        this.idade = '';
        this.turma = '';
        this.aulas = '';
        this.notas = '';

    }

    ConsultarTurma(){
        console.log("consultando turma...")
    }

    ConsultarNotas(){
        console.log("consultando notas...")
    }

    ConsultarAula(){
        console.log("consultando aulas...")
    }

}

class Encomenda{

    constructor(){
        this.nome = '';
        this.endereco = '';
        this.preco = '';
        this.status = '';
        this.rota = '';

    }

    ConsultarStatus(){
        console.log("consultando status do pedido...")
    }

    Preco(){
        console.log("verificando preços...")
    }

    VerificarRota(){
        console.log("verificando rota...")
    }

    AlterarEndereco(){
        console.log("alterando endreço de recebimento...")
    }
    
    CalcularFrete(){
        console.log("calculando frete...")
    }

}

class BandaStreaming{

    constructor(){
        this.nome = '';
        this.duracao = '';
        this.curtidas = '';
        this.comentarios = '';

    }

    Postar(){
        console.log("postando...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

    Ouvir(){
        console.log("ouvindo...")
    }

}

class Delivery{

    constructor(){
        this.nome = '';
        this.preco = '';
        this.categoria = '';
        this.endereco = '';
        this.quantidade = '';

    }

    Comparar(){
        console.log("comparando...")
    }

    Pedir(){
        console.log("pedindo...")
    }

    CalcularEntrega(){
        console.log("calculando valor de entrega...")
    }

    AumentarQuantidade(){
        console.log("pedindo mais comida...")
    }

}

class Dentista{

    constructor(){
        this.paciente = '';
        this.preco = '';
        this.data = '';
        this.horario = '';

    }

    AgendarHorario(){
        console.log("agendando horario...")
    }

    CobrarValor(){
        console.log("cobrando muito dinheiro na mensalidade da manutenção que ele pagara por anos...")
    }

    AgendarDia(){
        console.log("agendando dia...")
    }

}

class BancoBiblioteca{

    constructor(){
        this.conexao = '';
        this.escrita = '';
        this.interpretar = '';
        this.manipulacao = '';

    }

    conexao(){
        console.log("estabelecendo conexão com o banco...")
    }

    Interpretador(){
        console.log("interpretando código para transformar em ação do banco...")
    }

    Escrevendo(){
        console.log("executando ação do código...")
    }

    Manipular(){
        console.log("manipulando dados do banco")
    }

}

class MensagemZap{

    constructor(){
        this.mensagem = '';
        this.emojis = '';
        this.imagens = '';
        this.figurinhas = '';

    }

    MandandoMensagem(){
        console.log("enviando mensagen para destinatario...")
    }

    EnviandoEmoji(){
        console.log("mandando emoji...")
    }

    RecebendoFigurinha(){
        console.log("recebendo figurinha...")
    }

    MandandoImagem(){
        console.log("mandando imagem")
    }

}

class InventarioPersonagem{

    constructor(){
        this.tamanho = '';
        this.itens = '';
        this.quantidade = '';
        this.espaco = '';

    }

    GuardarItem(){
        console.log("guardando item...")
    }

    OrganizarInventario(){
        console.log("organizando automaticamente inventario...")
    }

    Quantidade(){
        console.log("limitando quantidade maxima...")
    }

    Espaco(){
        console.log("almentando espaço do inventario")
    }

}

class GrupoSocial{

    constructor(){
        this.nome = '';
        this.mensagem = '';
        this.curtidas = '';

    }

    Postar(){
        console.log("postando...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

}

class Video{

    constructor(){
        this.nome = '';
        this.duracao = '';
        this.curtidas = '';
        this.comentarios = '';

    }

    Assistir(){
        console.log("reproduzindo...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

    Pausar(){
        console.log("Pausando...")
    }

}

class StorieInstagram{

    constructor(){
        this.nome = '';
        this.duracao = '';
        this.curtidas = '';
        this.comentarios = '';

    }

    Postar(){
        console.log("postando...")
    }

    Assistir(){
        console.log("reproduzindo...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

    Remover(){
        console.log("removendo storie")
    }

}

class Buscador{

    constructor(){
        this.pesquisa = '';
        this.imagem = '';

    }

    Buscando(){
        console.log("buscando o que foi digitado...")
    }

    Responsta(){
        console.log("mostrando resposta ao usuário...")
    }

    PesquisarImagens(){
        console.log("pesquisando por imagens...")
    }

    Curtir(){
        console.log("curtindo tópico de pesquisa...")
    }

}

class Notificacao{

    constructor(){
        this.alerta = '';
        this.conteudo = '';

    }

    Notificando(){
        console.log("notificando usuário...")
    }

    Silenciar(){
        console.log("silenciando notificações...")
    }

    FiltrarNotificacoes(){
        console.log("filtrar recebimento de notificações...")
    }

}

class CursoUdemy{

    constructor(){
        this.nome = '';
        this.duracao = '';
        this.curtidas = '';
        this.comentarios = '';
        this.valor = '';

    }

    Comprar(){
        console.log("comprando...")
    }

    Assistir(){
        console.log("reproduzindo...")
    }

    Comentar(){
        console.log("comentando...")
    }

    Pesquisar(){
        console.log("pesquisando...")
    }

    Curtir(){
        console.log("curtindo...")
    }

    Pausar(){
        console.log("Pausando...")
    }

}