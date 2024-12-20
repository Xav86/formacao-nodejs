const express = require('express');
const app = express();
const router = require('./routes/routes')

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static('public'));

app.use('/', router);

module.exports = app;