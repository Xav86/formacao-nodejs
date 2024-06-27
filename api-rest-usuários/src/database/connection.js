const knex = require("knex");
const Oracledb = require("oracledb");
require("dotenv").config();

Oracledb.initOracleClient();

const connection = {
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DATABASE,
  connectString: process.env.CONNECTSTRING,
};

const knexInstance = knex({
  client: process.env.DIALECT,
  connection,
});

module.exports = knexInstance;