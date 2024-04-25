function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function enviarEmail( corpo, para){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            var deuErro = false;

            if (!deuErro){
                resolve({time: 6, to: "gustavo@gustavo.teste"}); // Promessa OK
            }else{
                reject("Falha ao enviar o email"); // Falhou
            }
            
        },4000);
    })
}

// enviarEmail("Ola","gustavo@gustavo.teste").then( ({time, to}) =>{
//     console.log(`
//     Time: ${time}
//     ---------
//     To: ${to}
//     `)
//     console.log("Concluido")
// }).catch((erro) => {
//     console.log("Falou")
//     console.log(erro)
// })

/*
console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("FIM");
*/

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Gustavo",lang: "PHP"},
                {name: "Calebe",lang: "C#"},
                {name: "Caetano",lang: "Inglês"}
            ])
        },3000)
    })
}

async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios)
    console.log("Ola!");
}

principal();