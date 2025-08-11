const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criar);

module.exports = router;