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

/* ASSOCIATED INSERTS
database.insert({
    NOME: "Mojang",
    GAME_ID: 3
}).table("ESTUDIOS_2").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/

/* JOIN - RELACIONAMENTO 1 para 1
database.select(["GAMES_3.*","ESTUDIOS_2.ID as estudios_id"]).table("GAMES_3").innerJoin("ESTUDIOS_2", "ESTUDIOS_2.GAME_ID","GAMES_3.ID").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* JOIN COM WHERE - nota: para adicionar mais joins basta repetir no fim o .innerJoin(...)
database.select(["GAMES_3.*","ESTUDIOS_2.ID as estudios_id"]).table("GAMES_3").innerJoin("ESTUDIOS_2", "ESTUDIOS_2.GAME_ID","GAMES_3.ID").where("GAMES_3.ID",4).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* 1 para M - literalmente igual 1 para 1
database.select(["GAMES_3.*","ESTUDIOS_2.NOME as estudio_nome"]).table("GAMES_3").innerJoin("ESTUDIOS_2", "ESTUDIOS_2.GAME_ID","GAMES_3.ID").then(data => {
    var estudiosGamesArray = data;
    var game = {
        ID: 0,
        NOME: "",
        estudios: []
    }

    game.ID = data[0].ID;
    game.NOME = data[0].NOME;

    data.forEach(estudio => {
        game.estudios.push({NOME: estudio.estudio_nome});
    })

    console.log(game);
}).catch(err => {
    console.log(err);
});
*/

/* M para M
database.select([
        "ESTUDIOS_2.NOME as estudio_nome",
        "GAMES_3.NOME as game_nome",
        "GAMES_3.PRECO"
    ])
    .table("GAMES_ESTUDIOS")
    .innerJoin("GAMES_3","GAMES_3.ID","GAMES_ESTUDIOS.GAME_ID")
    .innerJoin("ESTUDIOS_2","ESTUDIOS_2.ID","GAMES_ESTUDIOS.ESTUDIO_ID")
    .where("GAMES_3.ID",1)
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
*/

/* da para fazer sem o where tmb
database.select([
        "ESTUDIOS_2.NOME as estudio_nome",
        "GAMES_3.NOME as game_nome",
        "GAMES_3.PRECO"
    ])
    .table("GAMES_ESTUDIOS")
    .innerJoin("GAMES_3","GAMES_3.ID","GAMES_ESTUDIOS.GAME_ID")
    .innerJoin("ESTUDIOS_2","ESTUDIOS_2.ID","GAMES_ESTUDIOS.ESTUDIO_ID")
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
*/

/* da pra mudar as condições do where tmb
database.select([
        "ESTUDIOS_2.NOME as estudio_nome",
        "GAMES_3.NOME as game_nome",
        "GAMES_3.PRECO"
    ])
    .table("GAMES_ESTUDIOS")
    .innerJoin("GAMES_3","GAMES_3.ID","GAMES_ESTUDIOS.GAME_ID")
    .innerJoin("ESTUDIOS_2","ESTUDIOS_2.ID","GAMES_ESTUDIOS.ESTUDIO_ID")
    .where("ESTUDIOS_2.ID", 2)
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
*/