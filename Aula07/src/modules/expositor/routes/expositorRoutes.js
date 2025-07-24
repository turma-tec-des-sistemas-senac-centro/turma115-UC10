const express = require('express');
const router = express.Router();
const ExpositorController = require('../controllers/expositorController');

router.post('/', ExpositorController.cadastrar);
router.get('/', ExpositorController.listarTodos);
router.get('/:id', ExpositorController.buscarPorId);
router.delete('/:id', ExpositorController.deletar);

module.exports = router;
