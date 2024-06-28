const { Knex } = require('knex');
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
    async findEmail(email) {
        try {
            const result = await knexInstance.select().from('users').where({email: email});
            
            if (result.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch(err) {
            console.log('Erro ao buscar email: ', err);
            return;
        }
    }

    /* -- Busca por ID -- */
    async findById(id){
        try {
            const result = await knexInstance.select(['id', 'name','email', 'role']).where({'id': id}).table('users');
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

    /* --- Listagem de usuários para adiministradores --- */
    async findAll() {
        try {
            const result = await knexInstance.select(['id', 'name','email', 'role']).table('users');
            return result;
        } catch(err) {
            console.log('Erro ao fazer a listagem de usuários: ', err);
            return [];
        }
    }

}

module.exports = new User();