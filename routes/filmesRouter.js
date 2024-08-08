const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesControllers');
const avaliacoesRouter = require("../controllers/avaliacoesControllers");
const usuariosRouter = require("../controllers/usuariosControllers");
const comentariosController = require("../controllers/comentariosControllers");

router.use('/avaliacoes', avaliacoesRouter);
router.use('/usuarios', usuariosRouter);
router.use('/filmes', filmesController);
router.use('/comentarios', comentariosController);

module.exports = router;