const sum = require('../modules/sum'); //importação do arquivo/modulo

describe('Testes básicos da função soma', () => {
    test('Verificar a soma de números positivos', () => {
        expect(sum(8, 8)).toBe(16);
    });
    test('Verificar a soma de números negativos', () => {
        expect(sum(-8, 8)).toBe(0);
    });
    test('Verificar a soma de números com texto', () => {
        expect(sum(-8, "8")).toBe("Erro, não é possivel realizar a soma.");
    });
    test('Verificar a soma de números com array', () => {
        expect(sum(-8, [8])).toBe("Erro, não é possivel realizar a soma.");
    });
});


