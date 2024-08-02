const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');

router.use('/usuarios', usuariosControllers);

module.exports = router;