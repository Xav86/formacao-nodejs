const database = require("./database");

/*
var dados = [
    {
        NOME: "Terraria",
        PRECO: 19.99
    },
    {
        NOME: "GTA",
        PRECO: 100.00
    },
    {
        NOME: "Minecraft",
        PRECO: 110.00
    },
    {
        NOME: "Sea of Thieves",
        PRECO: 59.99
    }
]


database.insert(dados).into("GAMES_3").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
*/

/* SELECT
database.select(["NOME","PRECO"]).table("GAMES_3").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* NESTED QUERIES
// Versão Async Await
async function inserirBuscar() {
    try {
        const insert = await database.insert({NOME: "Celeste", PRECO: 60}).into("GAMES_3");
        const data = await database.select(["NOME","PRECO"]).table("GAMES_3");
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

inserirBuscar();

//Versão Promise 
database.insert({NOME: "Deaths Door", PRECO: 50}).into("GAMES_3").then(data => {
    database.select(["NOME","PRECO"]).table("GAMES_3").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err)
});
*/

/* WHERE
database.select()
    .whereRaw("NOME = 'Sea of Thieves' OR PRECO < 50")
    // .where({NOME: "Celeste"})
    // .where({ID: 2})
    // .orWhere({ID: 2})
    .table("GAMES_3").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
*/

/* RAW
database.raw("SELECT * FROM GAMES_3").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* DELETE
database.where({ID: 2}).delete().table("GAMES_3").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* UPDATE
// Sempre respeitar o tipo de campo, se é string passar string, se numero passar numero...senão da erro
// Se um dado for como Undefined, ele da erro! (serve pra todas as operações)
database.where({ID: 1}).update({PRECO: 10}).table("GAMES_3").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* ORDER BY
database.select().table("GAMES_3").orderBy("NOME","asc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/
