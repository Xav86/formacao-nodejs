const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article = mongoose.model("Article", articleModel);

// const artigo = new Article({ 
//     title: "talvez", 
//     author: "barriga", 
//     body: "6Não",
//     special: true,
//     resume: {
//         content: 'nem',
//         author: 'Gustavo235.42'
//     }
// });

// artigo.save().then(() => {
//     console.log('Artigo Salvo');
// }).catch(error => {
//     console.error(error);
// });

Article.find({  }).then(articles => {
    console.log(articles);
}).catch(error => {
    console.error(error);
});

// Article.find({ '_id': '676958dfed34fb8c5d88a54e' }).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.error(error);
// });

// Article.findOne({ '_id': '676958dfed34fb8c5d88a54e' }).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.error(error);
// });

// Article.findByIdAndDelete('676958dfed34fb8c5d88a54e').then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.error(error);
// });

// Article.deleteOne({ '_id': '676958dfed34fb8c5d88a54e' }).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.error(error);
// });

// Article.findByIdAndUpdate('676958dd3e1899becfb21b20', {  title: 'Nada não' }).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.error(error);
// });
