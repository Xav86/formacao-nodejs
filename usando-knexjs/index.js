// const database = require("./database");

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

/* TRANSAÇÕES
async function transacaoExemplo() {

    try {
        await database.transaction(async trans => {

            await trans.insert({ID: 6, NOME: "SUPERCELL"}).into("ESTUDIOS_2");
            await trans.insert({ID: 5, NOME: "Clash of Clãns", PRECO: 0}).into("GAMES_3");

        });
    } catch(err) {
        console.log(err);
    }

}

transacaoExemplo();
*/
// Função de busca
const express = require("express");
const app = express();
const database = require("./database"); // Certifique-se de que o arquivo database.js exporta a instância do knex

async function busca(retries = 5) {
//     try {
//         console.log("Executing procedure...");
//         await database.raw("BEGIN WEB_ADO_MONTA_ANALISE_ORCAMENTO(50, 1); END;");
//         console.log("Procedure executed successfully.");
//         const result = await database.raw("SELECT * FROM web_ado_analise_orcamento ORDER BY SVC_IN_CODIGO ASC");
//         console.log("Query executed successfully.");
//         return result;
//     } catch (err) {
//         if (err.code === 'ORA-00054' && retries > 0) {
//             console.warn(`Resource busy, retrying... (${5 - retries} retries left)`);
//             await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos antes de tentar novamente
//             return busca(retries - 1);
//         } else {
//             console.error("Error executing query:", err);
//             throw err;
//         }
//     }
try {
    const usuario = await database.raw("SELECT * FROM WEB_USUARIO WHERE ID_USUARIO = 'desenvolvimento'");
    // console.log(typeof usuario);
    // console.log(usuario);
    // console.log(usuario.ID_USUARIO_MEGA);
    return usuario;
} catch (err) {
    throw "Controllers/HomeController/home error: "+err
}
}


// Rota para teste
app.get("/", async (req, res) => {
    try {
        const result = await busca();
        res.send(result);
    } catch (err) {
        res.status(500).send("Error fetching data");
    }
});

// Iniciando o servidor
app.listen(3232, () => {
    console.log("Server running on port 3232");
});
