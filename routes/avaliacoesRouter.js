const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesControllers');

router.use('/avaliacoes', avaliacoesController);

module.exports = router;