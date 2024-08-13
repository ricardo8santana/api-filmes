const bodyParser = require('body-parser');
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
router.delete("/", (req, res) => {
    const {id} = req.body;
    const query = `delete  from avaliacoes where  id = ?;`;
    dbConecta.query(query, [id], (err, results) => {
        if(err) throw err;
        res.status(200).json({
            mensagem:'Avaliação excluida com sucesso !',
            body: req.body
        });
    });
});

router.put("/", (req, res) => {
    const {nota, usuario_id, filme_id} = req.body;
    const query = 'update avaliacoes set nota = ?, criado_em =  CURRENT_TIMESTAMP() where usuario_id = ? and filme_id =  ?' ;

    dbConecta.query(query, [nota, usuario_id, filme_id], (err) => {
        if (err) throw err;
        res.json({
            mensagem: "Avaliação atualizada com sucesso!",
            body: req.body
        });
    });
});

module.exports = router