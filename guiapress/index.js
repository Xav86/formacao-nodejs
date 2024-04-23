const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const { where } = require("sequelize");

// View engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

//config bootstrap5 pra ser estatico
// app.use(express.static("node_modules/bootstrap/dist/"));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/",(req,res) =>{

    Article.findAll({
        order:[['id','DESC']] 
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories:categories});
        
        });
    });
    
});

app.get("/:slug",(req,res) => {
    var slug = req.params.slug;
    Article.findOne({
        where:{
            slug:slug
        }
    }).then(article => {
        if (article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories:categories});
            
            });
        } else{
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/");
    });
});

app.get("/category/:slug",(req,res) => {
    var slug = req.params.slug;

    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}] // essa linha ta deixando ele indefinido
    }).then(category => {
        if(category != undefined){

            Category.findAll().then(categories => {
                res.render("index", {articles: category.article, categories: categories})
            })

        }else{
            res.redirect("/")
        }
    }).catch( err => {
        redirect("/")
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado!");
});