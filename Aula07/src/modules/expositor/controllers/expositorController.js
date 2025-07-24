const Expositor = require('../models/expositorModel');

module.exports = {
  async cadastrar(req, res) {
    const { nome, email, instituicao } = req.body;
    if (!nome || !email || !instituicao) {
      return res.status(400).json({ message: "Campos obrigatórios não informados" });
    }

    const existente = await Expositor.findOne({ where: { email } });
    if (existente) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const expositor = await Expositor.create({ nome, email, instituicao });
    return res.status(201).json({ message: "Expositor cadastrado com sucesso", expositor });
  },

  async listarTodos(req, res) {
    const expositores = await Expositor.findAll();
    return res.status(200).json(expositores);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const expositor = await Expositor.findByPk(id);
    if (!expositor) {
      return res.status(404).json({ message: "Expositor não encontrado" });
    }
    return res.status(200).json(expositor);
  },

  async deletar(req, res) {
    const { id } = req.params;
    const expositor = await Expositor.findByPk(id);
    if (!expositor) {
      return res.status(404).json({ message: "Expositor não encontrado" });
    }
    await expositor.destroy();
    return res.status(200).json({ message: "Expositor removido com sucesso" });
  }
};
