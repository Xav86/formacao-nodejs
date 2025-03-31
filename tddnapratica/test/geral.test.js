const app = require('../src/index.js')
const supertest = require('supertest');
const request = supertest(app);

test('Deve retornar a porta da aplicação sendo 3131', async () => {

    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
    
});

test('Deve retornar laranja como cor favorita do Gustavo', () => {
    return request.get('/cor/gustavo').then(res => { 
        expect(res.statusCode).toBe(200);
        expect(res.body.cor).toEqual('laranja');
        expect(res.body.color).toEqual('orange');
    });
});