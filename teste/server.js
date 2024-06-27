require("dotenv").config();

const app = require("./index");
const connection = require("./database/database");

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados: ", error);
  });


//------------- Iniciar o servidor ----------------

const PORT = process.env.PORT || 6984;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});