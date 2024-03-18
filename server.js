// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

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

app.use(userRoutes); // Usando as rotas relacionadas ao usuário
app.use(productRoutes); // Usando as rotas relacionadas ao usuário

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
