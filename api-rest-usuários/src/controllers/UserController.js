const User = require('../models/User');
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

}

module.exports = new UserController();