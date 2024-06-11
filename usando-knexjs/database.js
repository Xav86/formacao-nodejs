const Oraclebd = require("oracledb");

Oraclebd.initOracleClient({ libdir: "C:\\instantclient_19_64Bits" });

const knex = require('knex')({
    client: 'oracledb',
    connection: {
      host: 'srv-ora.fontana.local',
      port: 1521,
      user: 'treinamento',
      password: 'treinamento',
      database: 'orcl.fontana.local',
    },
  });

module.exports = knex;
