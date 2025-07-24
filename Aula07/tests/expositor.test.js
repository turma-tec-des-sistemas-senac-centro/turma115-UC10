const request = require('supertest');
const app = require('../src');
const { sequelize } = require('../src/database/config/database');
const Expositor = require('../src/modules/expositor/models/expositor.model');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Testes de Expositores', () => {
  it('Deve cadastrar expositor com sucesso', async () => {
    const res = await request(app)
      .post('/expositores')
      .send({ nome: 'João Silva', email: 'joao@teste.com', instituicao: 'IFRN' });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Expositor cadastrado com sucesso");
  });

  it('Não deve cadastrar expositor com email duplicado', async () => {
    await request(app)
      .post('/expositores')
      .send({ nome: 'Maria', email: 'joao@teste.com', instituicao: 'UFRN' });

    const res = await request(app)
      .post('/expositores')
      .send({ nome: 'Maria 2', email: 'joao@teste.com', instituicao: 'UFRN' });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Email já cadastrado");
  });

  it('Deve listar todos os expositores', async () => {
    const res = await request(app).get('/expositores');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve buscar expositor por ID', async () => {
    const novo = await Expositor.create({ nome: 'Carlos', email: 'carlos@teste.com', instituicao: 'UFPE' });
    const res = await request(app).get(`/expositores/${novo.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('carlos@teste.com');
  });

  it('Deve retornar 404 ao buscar expositor inexistente', async () => {
    const res = await request(app).get('/expositores/999');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Expositor não encontrado");
  });
});
