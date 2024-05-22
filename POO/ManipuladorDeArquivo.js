class Leitor {

    Ler(cominho){
        return "Conteúdo do arquivo";
    }
}


class Escritor {
    Escrever(arquivo, conteudo){
        console.log("Conteúdo escrito");
    }
}

class Criador {
    Criar(nome){
        console.log("Arquivo criado");
    }
}

class CriadorDePdf {
    Criar(){
        console.log("Criando PDF...");
    }
}

class Destruidor {
    Deletar(nome){
        console.log("Deleção em andamento");
    }
}

class ManipuladorDeArquivo {

    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new CriadorDePdf();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

var Manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

Manipulador.leitor.Ler();
Manipulador.escritor.Escrever();
Manipulador.criador.Criar();
Manipulador.destruidor.Deletar();

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(["Gustaov Gonçalves"]);