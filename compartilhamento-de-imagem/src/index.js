const express = require('express');
const app = express();
const mongoose = require("mongoose");
const user = require('./models/user.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/guiapics').then(() => {}).catch(error => { console.error(error) });

const User = mongoose.model('User', user);

app.get('/', ( req, res ) => {
    res.status(200).json({});
});

app.post('/user', async ( req, res ) => {
    const { name, email, password } = req.body;
    
    try {
        const newUser = new User({ name, email, password })
        await newUser.save();

        res.json({ email });
    } catch(error) {
        console.error(error);
        res.sendStatus(500)
    }
});

module.exports = app;