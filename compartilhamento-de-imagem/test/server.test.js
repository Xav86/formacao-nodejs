const app = require('../src/index.js');
const supertest = require('supertest');
const request = supertest(app);

test('Aplicação deve responder 200 para rota "/"', () => {

    return request.get('/').then(result => {
        const status = result.statusCode;

        expect(status).toBe(200);
    }).catch(error => {
        fail(error);
    })

});