const socket = io('http://localhost:3000');
socket.on('disconnect', () => {
    console.log('desconectado');
});
socket.emit('helloWorld', { nome: 'Gustavo' });

socket.on('resultado', (data) => {
    document.querySelector('#resultado').innerHTML = data;
});

const palavra = document.querySelector('#palavra');
palavra.addEventListener('input', () => {
    const input = palavra.value;
    console.log(input);
    socket.emit('palavra', input);
});