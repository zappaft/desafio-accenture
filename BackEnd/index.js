const express = require('express');
const { request } = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const TraducaoService = require('./service/TraducaoService');


app.get('/', (req, res) => {
    res.send("Servidor Ativo!")
})


app.get('/traduzir/:codigo', (req, res) => {
    const { codigo } = req.params;

    res.json({ 'palavra': TraducaoService.execute(codigo) });
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})