const Prototipo = require('../models/prototipo.model');
const Expositor = require('../../expositor/models/expositorModel');

module.exports = {
  async cadastrar(req, res) {
    const { titulo, descricao, categoria, expositorId } = req.body;

    if (!titulo || !descricao || !categoria || !expositorId) {
      return res.status(400).json({ message: "Campos obrigatórios não informados" });
    }

    const expositor = await Expositor.findByPk(expositorId);
    if (!expositor) {
      return res.status(404).json({ message: "Expositor não encontrado" });
    }

    const duplicado = await Prototipo.findOne({ where: { titulo, expositorId } });
    if (duplicado) {
      return res.status(400).json({ message: "Protótipo com este título já cadastrado para este expositor" });
    }

    const prototipo = await Prototipo.create({ titulo, descricao, categoria, expositorId });
    return res.status(201).json({ message: "Protótipo cadastrado com sucesso", prototipo });
  },

  async listarTodos(req, res) {
    const lista = await Prototipo.findAll();
    return res.status(200).json(lista);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const prototipo = await Prototipo.findByPk(id);
    if (!prototipo) {
      return res.status(404).json({ message: "Protótipo não encontrado" });
    }
    return res.status(200).json(prototipo);
  },

  async listarPorExpositor(req, res) {
    const { id } = req.params;
    const expositor = await Expositor.findByPk(id);
    if (!expositor) {
      return res.status(404).json({ message: "Expositor não encontrado" });
    }

    const lista = await Prototipo.findAll({ where: { expositorId: id } });
    return res.status(200).json(lista);
  },

  async deletar(req, res) {
    const { id } = req.params;
    const prototipo = await Prototipo.findByPk(id);
    if (!prototipo) {
      return res.status(404).json({ message: "Protótipo não encontrado" });
    }

    await prototipo.destroy();
    return res.status(200).json({ message: "Protótipo removido com sucesso" });
  }
};
