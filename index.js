const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 500 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
