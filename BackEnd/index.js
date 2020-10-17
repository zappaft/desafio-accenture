const express = require('express');
const { request } = require('express');



const app = express();

const port = 3000;

const { TraducaoService } = require('./service/TraducaoService');


app.get('/', (req, res) => {
    res.send("Servidor Ativo!")
})


app.get('/traduzir/:codigo', (req, res) => {
    const { codigo } = req.params;
    const traducaoService = new TraducaoService();
    res.send(traducaoService.execute(codigo));
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})