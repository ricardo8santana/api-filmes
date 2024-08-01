const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesControllers');

router.use('/filmes', filmesController);


module.exports = router;