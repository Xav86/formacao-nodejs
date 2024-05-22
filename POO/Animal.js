class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse método faz parte da classe mãe");
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log("...mu ha ha HA HA HAAA HAHAA!");
    }

    ChecarEstoque(){
        return 1000000;
    }

    MetodoQualquer(){
        console.log("outro console");
        super.MetodoQualquer();
        console.log("Aqui vem funcionalidade");
    }
}


var dog = new Cachorro("Ronaldo",6,100,"Chachorro", 30);

console.log(dog.ChecarEstoque());
dog.Latir();
dog.MetodoQualquer();
console.log(dog.peso)