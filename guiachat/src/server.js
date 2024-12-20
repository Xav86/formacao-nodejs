const app = require('.');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const socketIndex = require('./socket/socketIndex');

const PORT = process.env.PORT || 3000;

socketIndex(io);

http.listen(PORT, () => {
    console.log(`
        ****************************************

            Servidor rodando na porta ${PORT}

        ****************************************
    `);
});
