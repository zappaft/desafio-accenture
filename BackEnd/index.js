const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Servidor Ativo!")
})


app.get('/traduzir', (req, res) => {
    res.send("Servidor Ativo!")
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})