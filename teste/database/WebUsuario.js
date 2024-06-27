const Sequelize = require("sequelize-oracle");
const connection = require("./database");

const WebUsuario = connection.define("WEB_USUARIO", {
  ID_USUARIO: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  ID_USUARIO_MEGA: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  NM_USUARIO: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  tableName: "WEB_USUARIO",
  timestamps: false,
});

module.exports = WebUsuario;
