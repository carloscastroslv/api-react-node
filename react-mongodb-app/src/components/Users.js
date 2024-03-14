import React, { useState, useEffect } from 'react';
// import './App.css';

function User() {
  
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('http://192.168.18.6:5000/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Error fetching data: ', err));
    }, []);
  
    return (
      <div className="App">
        <h1>Lista de Usuários</h1>
        <div className='lista'>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <strong>Nome:</strong> {user.name}, <strong><br/>Email:</strong> {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default User;