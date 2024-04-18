/*
var calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtracao: function(a, b){
        return a - b;
    },
    multiplicacao: function(a, b){
        return a * b;
    },
    divisao: function(a, b){
        return a / b;
    },

};

module.exports = calculadora;
*/
var nome = "Minha calculadora V1";

function soma(a, b){
    return a + b;
};
function subtracao(a, b){
    return a - b;
};
function multiplicacao(a, b){
    return a * b;
};
function divisao(a, b){
    return a / b;
};

module.exports = {
    soma,
    multiplicacao,
    subtracao,
    divisao,
    nome,
};