const Produto = require('../models/produtoModel');
const ProdutoControler = require('../controllers/produtoController');
const { sequelize } = require('../../../config/configDB');

beforeAll(async () => {
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    await sequelize.close();
})
describe('Testes do Produto Controller', () => {
    test('Deve criar um produto no banco de dados', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: { nome: 'Feijão', preco: 4.90, estoque: 500 } }
        const produto = await ProdutoControler.criar(req);
        // Analisamos a const produto para verificar os dados retornados
        expect(produto).toHaveProperty('cod_prod');
        expect(produto.nome).toBe('Feijão');
        expect(produto.preco).toBe(4.90);
    });

    test('Deve retornar um erro caso não seja passado parametros no body', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: {} }
        const produto = await ProdutoControler.criar(req);
        // Analisamos a const produto para verificar os dados retornados
        expect(produto).toHaveProperty('cod_prod');
        expect(produto.nome).toBe('Feijão');
        expect(produto.preco).toBe(4.90);
    });



})
