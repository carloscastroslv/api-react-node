// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching data: ', err));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Nome:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
