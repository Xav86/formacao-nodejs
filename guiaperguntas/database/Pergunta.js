const Sequelize = require("sequelize-oracle");
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
      type: Sequelize.STRING,
      allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada!")
});

module.exports = Pergunta;