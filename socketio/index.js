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
    
    socket.on('disconnect', () => {
        console.log('desconectado: ', socket.id);
    })

    socket.on('helloWorld', (data) => {
        console.log(data);
    });

    socket.on('palavra', (data) => {
        console.log(data);
        socket.emit('resultado', data);
    });
    
});

http.listen(3000, () => {
    console.log(`
        ***********************
        
            Servidor rodando

        ***********************
    `);
});