const User = require('../models/User');
const PasswordToken = require('../models/PasswordToken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const secret = process.env.SECRET;

class UserController {

    async index(req, res) {
        const users = await User.findAll();
        res.json(users);
    }

    async create(req, res) {
        const { name, email, password } =  req.body;

        if(!email || !name || !password || email === undefined || name === undefined || password === undefined || email === null || password === null){
            res.status(400).send('no');
            return;
        } else {

            const emailExist = await User.findEmail(email);
            if (emailExist) {
                res.status(406).send('O e-mail já esta cadastrado, por favor, tente outro');
                return;
            }

            await User.create(name, email, password);
            res.status(200).send('Usuario criado!');
        }

    }

    async FindUser(req, res){
        const id = req.params.id;
        const user = await User.findById(id);

        if (user === undefined) {
            res.status(404).json({mensage: 'Usuário não encontrado'});
        } else {
            res.status(200).json(user);
        }
    }
    
    async edit(req, res) {
        const {id, name, email, role} = req.body;

        const result = await User.update(id, name, email, role);
        
        if (result != undefined) {
            if(result.status) {
                res.status(200).send('Atualizado!');
            } else {
                res.json(result.err);
            }
        } else {
            res.json(result.err);
        }

    }

    async remove(req, res) {
        const id = req.params.id;

        const result = await User.delete(id);

        if(result.status) {
            res.status(200).send('Usuário deletado');
        } else {
            res.status(406).send(result.err);
        }

    }

    async recoverPassword(req, res) {
        const { email } = req.body;
        const result = await PasswordToken.create(email);
        if(result.status) {

            // console.log(result.token);
            res.status(200).send("result:" + result.token);
        } else {
            res.status(406).send(result.err);
        }
    }

    async changePassword(req, res) {
        const token = req.body.token;
        const password = req.body.password;

        const isTokenValid = await PasswordToken.validate(token);

        if(isTokenValid.status) {
            await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token);
            res.status(200).send('Senha alterada');
        } else {
            res.status(406).send('token invalido!');
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findByEmail(email);

        if (user != undefined) {

            const result = await bcrypt.compare(password, user.password);

            if (result) {

                const token = jwt.sign({ email: user.email, role: user.role }, secret);

                res.status(200).json({token: token});

            } else {
                res.status(406).send('Senha incorreta');
            }

        } else {

            res.json({status: false});

        }
    }

}

module.exports = new UserController();