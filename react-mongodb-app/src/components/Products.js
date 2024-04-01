import React, { useState, useEffect } from "react";
import "../App.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.18.6:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="lista">
          <ul className="product-list">
            {products.map((product) => (
              <li key={product._id} className="product-item">
                <strong>Descrição:</strong> {product.descricao},{" "}
                <strong>
                  <br />
                  Quantidade:
                </strong>{" "}
                {product.quant},{" "}
                <strong>
                  <br />
                  Preço:
                </strong>{" "}
                {product.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Product;
