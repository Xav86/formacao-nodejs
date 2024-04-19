const Sequelize = require('sequelize-oracle');
const Oraclebd = require("oracledb");
require("dotenv").config();

Oraclebd.initOracleClient({ libdir: "C://app/client/product/12.2.0/client_1/Network/Admin" });

const connection = new Sequelize(process.env.SERVER,process.env.USER,process.env.PASSWORD_DATABASE,{ //nome do banco, usuario, senha
    host: process.env.HOST, //onde esta rodando a aplicação
    dialect: process.env.DIALECT, //tipo do banco
    //process.env

});

module.exports = connection;