import React, { useState } from "react";

export default function Carrinho() {
  const [num, setNum] = useState(0);

  return (
    <>
      <label>Quant: </label>
      <input></input>
      <div className="caixa_botao">
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div>
      <p>{num}</p>
    </>
  );
}
