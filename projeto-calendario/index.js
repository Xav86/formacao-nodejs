const express = require('express');
const app = express();
const mongoose = require('mongoose');
const appointmentService = require('./services/AppointmentService.js');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/agendamento');

app.get('/', ( req, res ) => {
    res.send('teste');
});

app.get('/cadastro', ( req, res ) => {
    res.render('create.ejs');
});

app.post('/create', async (req, res) => {
    const { nome, email, desc, cpf, data, horario } = req.body;

    const status = await appointmentService.create(
        nome, email, desc, cpf, data, horario
    );

    if ( status ) {
        res.redirect('/');
    } else {
        res.send('Ocorreu uma falha');
    }

});

app.listen(1919, () => {
    console.log(`
       ************************************
        
         🟢 Projeto Rodando na porta 1919

       ************************************
    `);
});