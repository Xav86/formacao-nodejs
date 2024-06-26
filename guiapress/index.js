const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./user/UserController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./user/User");
const { where } = require("sequelize");
const { Model } = require("sequelize-oracle");

// View engine
app.set('view engine','ejs');

// Sessions
app.use(session({
    secret: "plinplinplon", cookie: {maxAge: 3000000}
}))

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
app.use("/", usersController);

app.get("/",(req,res) =>{

    Article.findAll({
        order:[['id','DESC']],
        limit: 4
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

// não consegui fazer funcionar um sistema de filtro, onde na navbar estaria todas as categorias e quando clicadas, somente os artigos com aquela categoria seriam escritos

// app.get("/category/:slug",(req,res) => {
//     var slug = req.params.slug;
//     Category.findOne({
//         where: {
//             slug: slug
//         }
//     }).then(category => {
//         if(category != undefined){
//             Category.findAll().then(categories => {
//                 Article.findAll().then(articles =>{
//                     res.render("index",{articles: articles, categories: categories});
//                 });
//             });
//         }else{
//             res.redirect("/");
//         }
//     }).catch( err => {
//         res.redirect("/");
//     })
// })

// abaixo seria o q deveria ir no homenavbar

//  <% categories.forEach(category => { %>
//     <li class="nav-item">
//         <a  class="nav-link" href="/category/<%= category.slug %>"><%= category.title %></a>
//     </li>
// <% }) %> 

app.listen(8080, () => {
    console.log("Servidor iniciado!");
});