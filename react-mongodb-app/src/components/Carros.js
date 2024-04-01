import React from "react";

export default function Carros() {
  const carros = ["Fusca", "Opala", "Chevette", "Kombi", "Rural"];
  const listacarros = carros.map((c) => <p>{c}</p>);

  return (
    <div>
      <h1>Lista de carros</h1>
      <ul>
        <li>{listacarros}</li>
      </ul>
    </div>
  );
}
