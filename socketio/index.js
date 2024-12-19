const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    console.log(socket);
    console.log(socket.id);
});

http.listen(3000, () => {
    console.log(`
        ***********************
        
            Servidor rodando

        ***********************
    `);
});