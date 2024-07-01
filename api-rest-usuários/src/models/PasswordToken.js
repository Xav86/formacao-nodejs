const knexInstance = require('../database/connection');
const User = require('./User');

class PasswordToken {

    async create(email) {
        const user = await User.findByEmail(email);
        if(user != undefined){
            try{
                var token = Date.now();
                await knexInstance.insert({
                    user_id: user.ID,
                    used: 0,
                    token: token 
                }).table("passwordtokens");

                return {status: true,token: token}
            }catch(err){
                console.log(err);
                return {status: false, err: err}
            }
        }else{
            return {status: false, err: "O e-mail passado não existe no banco de dados!"};
        }
    }

    async validate(token) {
        try {
            const result = await knexInstance.select().where({token: token}).table('passwordtokens');

            if(result.length > 0) {
                const tk = result[0];

                if(tk.used){
                    return {status: false};
                }else{
                    return {status: true, token: tk};
                }
            } else {
                return {status: false};
            }

        } catch(err) {
            console.log(err);
            return {status: false};
        }
    }

}

module.exports = new PasswordToken;