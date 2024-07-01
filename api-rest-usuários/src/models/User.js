const knexInstance = require('../database/connection');
const bcrypt = require('bcrypt');

// Service

class User {

    /* -- Cadastro de novo Usuário -- */
    async create(name, email, password) {
        
        try {
            const hash = await bcrypt.hash(password, 10);

            await knexInstance.insert({name, email, password: hash, role: 0}).into('users');
            return;
        } catch(err) {
            console.log('Erro ao cadastrar usuário! ',err);
            return;
        }

    }

    /* -- Busca por usuários cadastrados para ver se ninguem já tem aquele email --*/
    async findEmail(email){
        try{
            const result = await knexInstance.select().from('users').where({email: email});
            
            if(result.length > 0){
                return true;
            }else{
                return false;
            }

        }catch(err){
            console.log(err);
            return false;
        }
    }

    /* -- Busca por ID -- */
    async findById(id){
        try {
        const result = await knexInstance.select(['ID', 'name', 'email', 'role']).where({'ID': id}).table('users');
            if (result.length > 0){
                return result[0];
            } else {
                return undefined;
            }
        } catch(err) {
            console.log('Erro ao fazer a listagem de usuários: ', err);
            return undefined;
        }
    
    }

    async findByEmail(email){
        try{
            const result = await knexInstance.select(['ID','email','password','role','name']).where({email:email}).table('users');
            
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }
    
    }

    /* --- Listagem de usuários para adiministradores --- */
    async findAll() {
        try {
            const result = await knexInstance.select(['ID', 'name','email', 'role']).table('users');
            return result;
        } catch(err) {
            console.log('Erro ao fazer a listagem de usuários: ', err);
            return [];
        }
    }

    /* ---- update ---- */
    async update(id, name, email, role){

        const user = await this.findById(id);

        if(user != undefined){

            let editUser = {};

            if(email != undefined){ 
                if(email != user.email){
                   const result = await this.findEmail(email);
                   if(result == false){
                        editUser.email = email;
                   }else{
                        return {status: false, err: "O e-mail já está cadastrado"}
                   }
                }
            }

            if(name != undefined){
                editUser.name = name;
            }

            if(role != undefined){
                editUser.role = role;
            }

            try{
                await knexInstance.update(editUser).where({ID: id}).table('users');
                return {status: true}
            }catch(err){
                return {status: false,err: err}
            }
            
        }else{
            return {status: false,err: 'O usuário não existe!'}
        }
    }

    async delete(id) {
        const user = await this.findById(id);
        if (user != undefined) {
            try {
                await knexInstance.delete().where({ID: id}).table('users');
                return {status: true};
            } catch(err) {
                return {status: false, err: `Ocorreu um erro durante a deleção: ${err}`};
            }

        } else {
            return {status: false, err: 'O usuário não existe, não podendo ser deletado.'};
        }
    } 

    async changePassword(newPassword, id, token) {
        const hash = await bcrypt.hash(newPassword, 10);
        await knexInstance.update({password: hash}).where({ID: id}).table('users');
        await knexInstance.update({used: 1}).where({token: token}).table('passwordtokens');
    }

}

module.exports = new User();