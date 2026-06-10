// Servidor estático simples para o Railway.
// Serve o formulário em "/" e o painel em "/painel".
const express = require('express');
const path = require('path');
const app = express();

// Painel de gestão (com senha)
app.get('/painel', (req, res) => {
  res.sendFile(path.join(__dirname, 'painel.html'));
});

// Formulário público fica na raiz "/" (e demais arquivos estáticos)
app.use(express.static(__dirname, { extensions: ['html'] }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('E2S leads no ar na porta ' + port));
