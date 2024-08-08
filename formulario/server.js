// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear application/json
app.use(bodyParser.json());

// Middleware para parsear application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota POST para receber os dados do formulário
app.post('/submit', (req, res) => {
    console.log('Dados do formulário recebidos:');
    console.log(req.body);

    // Aqui você pode processar os dados como desejar
    // Por exemplo, salvar em um banco de dados, enviar por e-mail, etc.

    res.json({ message: 'Dados recebidos com sucesso!', data: req.body });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
