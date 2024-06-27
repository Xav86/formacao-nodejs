class UserController {

    async index(req, res) {}

    async create(req, res) {
        const { email, name, password } =  req.body;

        if(!email || !name || !password || email === undefined || name === undefined || password === undefined || email === null || password === null){
            res.status(400).send("no");
        } else {
            res.status(200).send("Pegando o corpo da requisição!");
        }

    }

}

module.exports = new UserController();