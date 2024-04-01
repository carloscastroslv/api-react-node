// src/App.js

import User from "./components/Users";
import Product from "./components/Products";
import Menu from "./components/menu";
import Carrinho from "./components/carrinho";
// import './App.css';

function App() {
  return (
    <>
      <Menu />
      <div className="app-container">
        <User />
        <Product />
      </div>
    </>
  );
}

export default App;
