const request = require('supertest');
const app = require('../src/app');
const { sequelize } = require('../src/database/config/database');
const Expositor = require('../src/modules/expositor/models/expositor.model');
const Prototipo = require('../src/modules/prototipo/models/prototipo.model');

let expositorId;

beforeAll(async () => {
  await sequelize.sync({ force: true });

  const expositor = await Expositor.create({
    nome: "Lucas",
    email: "lucas@teste.com",
    instituicao: "IFPB"
  });
  expositorId = expositor.id;
});

describe('Testes de Protótipos', () => {
  it('Deve cadastrar protótipo com sucesso', async () => {
    const res = await request(app)
      .post('/prototipos')
      .send({
        titulo: 'Robô Seguidor de Linha',
        descricao: 'Um robô que segue linha preta com sensores infravermelho.',
        categoria: 'Robótica',
        expositorId
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Protótipo cadastrado com sucesso");
  });

  it('Não deve permitir título duplicado para o mesmo expositor', async () => {
    const res = await request(app)
      .post('/prototipos')
      .send({
        titulo: 'Robô Seguidor de Linha',
        descricao: 'Outro robô',
        categoria: 'Eletrônica',
        expositorId
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Protótipo com este título já cadastrado para este expositor");
  });

  it('Deve listar todos os protótipos', async () => {
    const res = await request(app).get('/prototipos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve buscar por ID', async () => {
    const prototipo = await Prototipo.findOne();
    const res = await request(app).get(`/prototipos/${prototipo.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe('Robô Seguidor de Linha');
  });

  it('Deve listar protótipos por expositor', async () => {
    const res = await request(app).get(`/prototipos/expositor/${expositorId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('Deve retornar 404 para expositor inexistente na listagem de protótipos', async () => {
    const res = await request(app).get(`/prototipos/expositor/999`);
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Expositor não encontrado");
  });

  it('Deve deletar protótipo existente', async () => {
    const prototipo = await Prototipo.findOne();
    const res = await request(app).delete(`/prototipos/${prototipo.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Protótipo removido com sucesso");
  });
});
