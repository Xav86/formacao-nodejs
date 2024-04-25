{
let user = {
    nome: "Gustavo",
    idade: 18,
    empresa: "Fontana",
    curso: "Formação Node.js",

}

let { nome, idade, curso } =  user;

console.log(nome)
console.log(idade)
console.log(curso)
}
// Uma hora eu tava apagando tudo, mas resolvi parar ai vai ficar um arquivo maior. creio eu, chuto umas 150 linhas
{
function soma (a,b){
    return a + b;
}

function multiplicação (a,b){
    console.log(a * b);
}

let mult3 = (a, b, c) => {
    return((a*b)/c);
}

let mult2 = a => console.log((a*a)/a);

let resultado = soma(2,345);

console.log(resultado);

resultado = mult3(4,7,9);

console.log(resultado);
}

{
let gustavo = {
    nome: "Gustavo",
    empresa: "Fontana",
} // Verificar(); => false

let calebe = {
    nome: "Calebe",
    empresa: "Thomson Reuters",
} // Verificar(); => true

let caetano = {
    nome: "Caetano",
    empresa: null,
} // Verificar(); => false

// Filter
// forEach

// Find

let users = [gustavo, calebe, caetano];

let usuario = users.find(user => user.nome === "Calebe"); // Verificar();

console.log(usuario);

}

{

let nome = "Gustavo";
let sobre = "estudante visando um futuro na programação"

let frase = `
Ola meu nome é                    ${nome} e
 eu so
 u um             ${sobre}`;

console.log(frase);

}