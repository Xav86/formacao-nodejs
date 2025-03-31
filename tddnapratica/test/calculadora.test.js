const app = require('../app.js');

describe('Operações basicas', () => {
    
    test('Deve retornar o valor 10 ao somar 5 + 5', () => {
    
        const result = app.soma(5, 5);
    
        expect(result).toBe(10);
    
    });
    
    test('Deve retornar 100 ao multiplicar 10 x 10', () => {
        
        const result = app.mult(10, 10);
    
        expect(result).toBe(100);
    
    });

});

describe('Outra categoria', () => {});