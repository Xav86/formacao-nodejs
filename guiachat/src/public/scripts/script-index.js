const socket = io('http://localhost:3000');
const chat = document.querySelector('.quadro-de-mensagens');

socket.on('disconnect', () => {
    console.log('desconectado');
});

socket.on('showmsg', (data) => {
    const p = document.createElement('p');
    p.textContent = `${ data.userName } - ${ data.msg }`;
    chat.appendChild(p);
});


document.querySelector('#send-button').addEventListener('click', () => {
    console.log('a');
    const msg = document.querySelector('#msg').value;
    const userName = document.querySelector('#user-name').value;

    console.log(msg, userName);

    socket.emit('msg', { msg, userName });
}); 
    