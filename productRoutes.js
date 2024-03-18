// userRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('./productModel');

// Endpoint para obter todos os usuários
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para adicionar um novo usuário
router.post('/products', async (req, res) => {
  const { descricao, quant, preco } = req.body;

  if (!descricao || !quant || !preco) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios' });
  }

  try {
    const newProduct = new Product({ descricao, quant, preco });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para atualizar um PRODUTO
router.put('/products/:id', async (req, res) => {
  const { descricao, quant, preco } = req.body;
  const { id } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { descricao, quant, preco }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para deletar um produto
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
