const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/agendamento');

app.get('/', ( req, res ) => {
    res.send('teste');
});

app.get('/cadastro', ( req, res ) => {
    res.render('create.ejs');
});

app.listen(1919, () => {
    console.log(`
       ************************************
        
         🟢 Projeto Rodando na porta 1919

       ************************************
    `);
});