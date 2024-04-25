
// setTimeout(() => {
//     console.log("OI")
// }, 8000)

// function enviarEmail(corpo, para, callback){
//     setTimeout(() =>{
//         console.log(`
//             Para ${para}
//             ----------
//             ${corpo}
//             ----------
//             De: Victor Lima

//         `)
//         callback("Ok", 5, "8s");
//     },8000)
// }

function enviarEmail(corpo, para, callback){
    setTimeout(() =>{
    
    var deuErro = false;

    if (deuErro){
        callback(12,"O envio do email falhou! X(")
    }else{
        callback(12);
    }

},8000)}

console.log("Inicio do envio de email");
enviarEmail("Oi","Gustavo", (time,erro) =>{
    if (erro == undefined){ // OK
        console.log("Tudo certo!");
        console.log(`Tempo de respotas ${time}s`);
    }else{ // Opa deu erro!
        console.log("Ocorreu um erro: "+  erro);
    }
});
// console.log("Seu e-mail foi enviado");
// enviarEmail("Oi","Gustavo", (status,amount, time) =>{
//     console.log(`
//     Status: ${status}
//     ----------------
//     Contatos: ${amount}
//     ----------------
//     Tempo de envio: ${time}
//     `);
//     console.log("Email cegou pra vc? da uma conferida ae")
// });