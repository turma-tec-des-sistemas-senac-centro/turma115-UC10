const express = require('express');
const router = express.Router();
const PrototipoController = require('../controllers/prototipoController');

router.post('/', PrototipoController.cadastrar);
router.get('/', PrototipoController.listarTodos);
router.get('/:id', PrototipoController.buscarPorId);
router.get('/expositor/:id', PrototipoController.listarPorExpositor);
router.delete('/:id', PrototipoController.deletar);

module.exports = router;
