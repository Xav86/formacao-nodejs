module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Novo cliente conectado: ${socket.id}`);

        socket.on('disconnect', () => {
            console.log(`Cliente desconectado: ${socket.id}`);
        });

        socket.on('msg', (data) => {
            io.emit('showmsg', data);
            console.log(data);
        });
    });
};
