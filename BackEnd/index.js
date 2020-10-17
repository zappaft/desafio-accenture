const express = require('express');
const { request } = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Servidor Ativo!")
})


app.get('/traduzir/:codigo', (req, res) => {
    const { codigo } = req.params;
    const traducao = codigo;
    res.send(traducao);
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})