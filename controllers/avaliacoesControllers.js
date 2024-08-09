const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const query = `select 
    a.*,
    u.username  as nome_usuarios
    from avaliacoes a 
    inner join usuarios u on
    u.id  = a.usuario_id `;
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });  
});
router.post("/", (req, res) =>{
    const {filme_id, usuario_id, nota} = req.body;
    const query =` insert into avaliacoes (filme_id, usuario_id, nota) values (?, ?, ?)`;
    dbConecta.query(query,[filme_id, usuario_id, nota], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Avalição feita',
            body: req.body
        });
    });
});

module.exports = router