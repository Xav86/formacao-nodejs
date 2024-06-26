const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");
const connection = require("../database/database");
const { where } = require("sequelize");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/articles", adminAuth ,(req,res) => {
    Article.findAll({
        order:[['id','ASC']],
        include: [{model: Category}]
    }).then(articles =>{
        res.render("admin/articles/index", {articles: articles})
    });
});

router.get("/admin/articles/new", adminAuth ,(req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});

    })
});

router.post("/articles/save", adminAuth ,(req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    });

});

router.post("/articles/delete", adminAuth ,(req, res) => {
    var id = req.body.id;
    if (id != undefined){
        if (!isNaN(id)) {
            connection.query(`delete "articles" where "id" = ${id}`)
            res.redirect("/admin/articles");
        }else{ // Não for um número
            res.redirect("/adimin/articles");
        }
    }else{ // null
        res.redirect("/admin/articles");
    }
});

router.get("/admin/articles/edit/:id", adminAuth ,(req, res) => {
    var id = req.params.id;
    
    if(isNaN(id)){
        res.redirect("/admin/articles");
    }

    Article.findById(id).then(article => {
        if (article != undefined){
            Category.findAll().then(categories => {
                res.render("admin/articles/edit",{article: article,categories: categories});
            })
        }else{
            res.redirect("/admin/articles");
        }
    }).catch(erro => {
        res.redirect("/admin/articles");
    })
});

router.post("/articles/update", adminAuth ,(req,res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.update({title: title, slug: slugify(title), body: body, categoryId: category},{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

router.get("/articles/page/:num", (req, res) => {
    var page = req.params.num;
    var limit = 4; // Limite de artigos por página
    var offset = 0;

    if (isNaN(page) || page < 1) {
        page = 1; // Página padrão caso seja inválido
    }

    offset = (page - 1) * limit;

    Article.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']],
    }).then(articles => {
        var totalPages = Math.ceil(articles.count / limit);
        var next
        if(page < totalPages){
            next = true;
        }else{
            next = false;
        }

        var result = {
            page: parseInt(page),
            next: next,
            articles: articles
        }

        Category.findAll().then(categories => {
            res.render("admin/articles/page", {result: result, categories: categories})
        });

    }).catch(err => {
        console.error("Erro ao buscar artigos:", err);
        res.redirect("/admin/articles");
    });
});

module.exports = router;