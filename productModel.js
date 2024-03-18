
const mongoose = require('mongoose');

const Products = mongoose.model('Products', {
    descricao: String,
    quant: Number,
    preco: Number,
  });

module.exports = Products;








