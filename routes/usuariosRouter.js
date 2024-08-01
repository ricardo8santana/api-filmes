const express = require('express');
const router = express.Router();
const filmesControllers = require('../controllers/filmesControllers');

router.use('./filmes', filmesControllers);

router.get("/usuarios", (req, res) => {
    const query = 'select * from  usuarios';
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });  
});

router.get("/:username", (req, res) => {
    const  username = req.params.username;
    const query = 'select * from filmes where username = ?';
    dbConecta.query(query,[username], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});
module.exports = router;