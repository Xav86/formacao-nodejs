const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article = mongoose.model("Article", articleModel);

const artigo = new Article({ title: "Sim", author: "Gustavo", body: "Não" });

artigo.save().then(() => {
    console.log('Artigo Salvo');
}).catch(error => {
    console.error(error);
});

console.log(Article);