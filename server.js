// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// aqui estamos importando as configurações do nosso arquivo .env
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.d2xtptm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: String,
  email: String,
});

const Products = mongoose.model('Products', {
  descricao: String,
  quant: Number,
  preco: Number,
});

// Endpoint para obter todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/users', async (req, res) => {
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

  app.post('/products', async (req, res) => {
    const { descricao, quant, preco } = req.body;
  
    if (!descricao || !quant || !preco) {
      return res.status(400).json({ message: 'Nome, email e preco são obrigatórios' });
    }
  
    try {
      const newProduct = new Products({ descricao, quant, preco });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
