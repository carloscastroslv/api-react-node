// userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('./userModel');

// Endpoint para obter todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para adicionar um novo usuário
router.post('/users', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios' });
  }

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para atualizar um usuário
router.put('/users/:id', async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para deletar um usuário
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
