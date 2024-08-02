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

module.exports = router