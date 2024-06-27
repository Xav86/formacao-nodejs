const express = require("express");
const app = express();
const WebUsuario = require("./database/WebUsuario");
require("dotenv").config({ path: ".env" });
const { QueryTypes } = require("sequelize");
const connection = require("./database/database");

app.set('view engine','ejs');

app.get("/", async (req, res) => {
  WebUsuario.findAll().then(event => {
    res.render("index",{event: event});
  }).catch(error => {
    console.log("Parece que algo deu errado...", error);
    res.redirect("/erro");

  });

});
  // try {
  //   const event = await connection.query(
  //     `SELECT * FROM WEB_USUARIO`,
  //     { type: QueryTypes.SELECT }
  //   );
  //   res.render("index",{event: event});
  // } catch (error) {
  //   console.error("Erro ao buscar usuários: ", error);
  //   res.redirect("/erro");
  // }
module.exports = app;
