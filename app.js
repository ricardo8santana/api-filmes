const express = require('express'); // importa o express
const cors = require('cors'); 
//const bodyParser = require('body-parser');
const app = express(); //inicializa o express
const port = 3000;
const filmesRouter = require("./routes/filmesRouter");

//app.use(bodyParser.json());
const corsConfig = {
    origin:'http://localhost:30001',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeader: ['Content-type']
}

app.use(express.json());

app.use(cors(corsConfig));

app.use('/', filmesRouter);

app.get("/", (req, res) => {
    res.send("Deu bom :) !");
});

//configurando a porta do server
app.listen(port, () => {
    console.log('Servidor rodando na porta:', port);
});