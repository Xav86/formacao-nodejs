const app = require('../src/index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Cadastro de usuário', () => {

    test('Deve cadastrar um usuário com sucesso', () => {
        
        const time = Date.now();
        const email = `${ time }@teste.com`
        const user = { name: 'Gustavo', email: email, password: "123654" };

        return request.post('/user')
            .send(user)
            .then(result => {

                expect(result.statusCode).toBe(200);
                expect(result.body.email).toEqual(email);

            })
            .catch(error => {
                fail(error);
            })

    });

});