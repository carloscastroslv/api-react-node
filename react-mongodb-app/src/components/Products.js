import React, { useState, useEffect } from 'react';
// import './App.css';

function Product() {
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('http://192.168.18.6:5000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(err => console.error('Error fetching data: ', err));
    }, []);
  
    return (
      <div className="App">
        <h1>Lista de Produtos</h1>
        <div className='lista'>
          <ul>
            {products.map(product => (
              <li key={product._id}>
                <strong>Descrição:</strong> {product.descricao}, <strong><br/>Quantidade:</strong> {product.quant}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default Product;