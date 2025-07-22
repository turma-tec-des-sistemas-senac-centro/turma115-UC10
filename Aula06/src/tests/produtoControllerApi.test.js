// certo
const Produto = require('../modules/produto/models/produtoModel');
const { sequelize } = require('../config/configDB');

const app = require('../index');
const request = require('supertest');

beforeAll(async () => {
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    await sequelize.close();
})

afterEach(async ()=>{
   // Truncate the table
    await Produto.truncate();
})

describe('Testes de integração - Produto', ()=>{
    test('POST /produtos', async ()=>{
        const res = await request(app).post('/produtos').send({nome: 'Feijão', preco: 3.70, estoque: 30})
        expect(res.status).toBe(201);
        expect(res.body.produto).toHaveProperty('cod_prod');
        expect(res.body.produto.nome).toBe('Feijão');
        expect(res.body.msg).toBe('produto criado com sucesso!');
        
    })
    test('POST /produtos - Deve falhar ao criar um produto sem nome ', async()=>{
        const res = await request(app).post('/produtos').send({preco: 3.70, estoque: 30});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');

    })
})