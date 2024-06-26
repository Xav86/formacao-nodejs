const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");
const { where } = require("sequelize");
const connection = require("../database/database");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/users", adminAuth ,(req, res) => {
    User.findAll({
        order:[['id','ASC']]
    }).then(users => {
        res.render("admin/users/index", {users: users});

    });

});

router.get("/admin/users/new", adminAuth ,(req, res) => {
    res.render("admin/users/new")
})

router.post("/users/save", adminAuth ,(req,res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        where: {email: email}
    }).then(users => {
        if (users == undefined){
            
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
        
            User.create({
                email: email,
                password: hash,
            }).then(() => {
                res.redirect("/admin/users");
        
            }).catch((err) => {
                res.redirect("/admin/users");
            })

        }else{
            res.redirect("/admin/users/new")
        }
    })

});

router.post("/users/delete", adminAuth ,(req,res) => {
    var id = req.body.id;
    if (id != undefined){
        if (!isNaN(id)) {
            connection.query(`delete "users" where "id" = ${id}`)
            res.redirect("/admin/users");
        }else{ // Não for um número
            res.redirect("/adimin/users");
        }
    }else{ // null
        res.redirect("/admin/users");
    }
});

router.get("/admin/users/edit/:id", adminAuth ,(req, res) => {
    var id = req.params.id;
    
    if(isNaN(id)){
        res.redirect("/admin/users");
    }

    User.findById(id).then(users => {
        if (users != undefined){
            res.render("admin/users/edit",{users: users});

        }else{
            res.redirect("/admin/users");
        }
    }).catch(erro => {
        res.redirect("/admin/users");
    })
});

router.post("/users/update", adminAuth ,(req, res) => {
    var id = req.body.id;
    var email = req.body.email;
    var password = req.body.password

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    User.update({email: email, password: hash },{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/users");
    });
});

router.get("/login", (req, res) => {
    res.render("admin/users/login");
});

router.post("/authenticate", (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where:{email: email}}).then(user => {
        if(user != undefined){ // se existe um usuário com esse e-mail
            //Validar
            var correct = bcrypt.compareSync(password, user.password);

            if (correct){
                req.session.user = {
                    id: user.id,
                    email: user.email,
                }
                res.redirect("/admin/articles")
            }else{
                res.redirect("/login");
            }

        }else{
            res.redirect("/login");
        }
    })

});

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
});

module.exports = router;