const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/guiapics').then(() => {}).catch(error => { console.error(error) });

app.get('/', ( req, res ) => {
    res.status(200).json({});
});

module.exports = app;