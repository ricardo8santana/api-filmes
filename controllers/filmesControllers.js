const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    const query = 'Select * from filmes';
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        //    res.send(`Conexão deu certo!`);
      res.json(results);
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const query = 'select * from filmes where id = ?';
    dbConecta.query(query, [id], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.delete("/", (req, res) => {
    const {id} = req.body;
    const query = `select * from filmes where id = ?`;
    dbConecta.query(query, [id], (err, result) => {
        if(err) throw err;
        res.status(200).json({
            mensagem:'Id excluido com sucesso!'
        });
    });
});

router.delete("/", (req, res) => {
    const {tmdb_id} = req.body;
    const query = `select * from filmes where tmdb_id = ?`;
    dbConecta.query(query, [tmdb_id], (err, result) => {
        if(err) throw err;
        res.status(200).json({
            mensagem:'TMDB_id excluido com sucesso!'
        });
    });
});
module.exports = router