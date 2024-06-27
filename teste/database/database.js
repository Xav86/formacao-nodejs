require('dotenv').config()
const Sequelize = require("sequelize-oracle");
const Oraclebd = require("oracledb");

Oraclebd.initOracleClient({ libdir: "C:\\instantclient_19_64Bits" });
// Oraclebd.initOracleClient({ libdir: "/opt/oracle/instantclient_19_16" });


const connection = new Sequelize(process.env.SERVER, process.env.USER_DB , process.env.PASSWORD_DATABASE, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});



module.exports = connection;
