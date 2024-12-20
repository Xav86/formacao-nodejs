const socket = io('http://localhost:3000');

socket.on('disconnect', () => {
    console.log('desconectado');
});