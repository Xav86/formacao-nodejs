// Sistema de cassino
// Vários tipos de dados
// Rolar dados

class Dados {

    constructor(faces){
        this.faces = faces

    }

    Rolar(){
        console.log("Resultado do dado: "+ this.GetRandomIntInclusive(1, this.faces));
        
    }

    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.ceil(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

}

var d6 = new Dados(6);
var d12 = new Dados(12);
var d100 = new Dados(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();