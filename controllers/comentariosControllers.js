const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `select 
    u.username,
    f.tmdb_id,
    c.*
     from comentarios c 
    inner join usuarios u on
    c.filme_id = usuario_id 
    inner join filmes f on
    c.filme_id  = f.id
    `
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});
router.post("/", (req, res ) => {
    const {filme_id, usuario_id, comentario} = req.body;
    const query = `insert into comentarios (filme_id, usuario_id, comentario) values(?, ?, ?)`;
    dbConecta.query(query,[filme_id, usuario_id, comentario], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Comentario Criado',
            body: req.body
        });
    }); 
});

router.delete("/", (req, res) => {
   const {id} = req.body;
    const query = `delete  from comentarios where  id = ?`;
    dbConecta.query(query, [id], (err, results) => {
        if(err) throw err;
        res.status(200).json({
            mensagem:'Comentario excluida!',
    });
  });
});

// router.patch("/", (req, res) => {
//     const {usuario_id, filme_id, comentario } = req.body;
//     const query = `update comentario  =  ?, where  usuario_id =  ? and filme_id = ?`;
//     dbConecta.query(query, [usuario_id, filme_id, comentario], (err) => {
//         if (err) throw err;
//         res.json({
//             mensagem: "Comentario atualizado com sucesso!",
//             body: req.body
//         });
//     });
// });

router.patch("/", (req, res) => {
    const { usuario_id, filme_id, comentario } = req.body;

    // Corrigido a consulta SQL
    const query = `
        UPDATE comentario
        SET comentario = ?
        WHERE usuario_id = ? AND filme_id = ?
    `;

    // Passa os parâmetros na ordem correta
    dbConecta.query(query, [comentario, usuario_id, filme_id], (err) => {
        if (err) {
            console.error(err); // Adiciona logging para melhor depuração
            return res.status(500).json({ mensagem: "Erro ao atualizar o comentário" });
        }

        res.json({
            mensagem: "Comentário atualizado com sucesso!",
            body: req.body
        });
    });
});

module.exports = router;