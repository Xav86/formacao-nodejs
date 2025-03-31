const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'oi' });
});

app.get('/cor/:pessoa', (req, res) => {
    const { pessoa } = req.params;

    if (pessoa === 'gustavo') return res.json({ cor: 'laranja', color: 'orange' });

    return res.json({ cor: 'branco', color: 'white' });
})

module.exports = app;