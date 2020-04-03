import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login() {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const user = await api.post('/session', {
        [usernameOrEmail.includes('@') ? 'email' : 'username']: usernameOrEmail,
        password
      });

      localStorage.setItem('auth', JSON.stringify(user.data));

      history.push('/');
      
    } catch(err) {
      alert('Wrong credentials, please try again.');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      history.push('/');
    }
  });

  return (
    <div className="login-container">
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Reactgram</h1>
          <input 
            name={usernameOrEmail.includes('@') ? 'username' : 'email'} 
            value={usernameOrEmail} 
            onChange={e => setUsernameOrEmail(e.target.value)}
            type="text" 
            placeholder="Username or e-mail" 
          />
          <input 
            name="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
          />
          <button>Login</button>
        </form>
        <div>
          <p>Don't have an account? 
            <Link to="/register" className="gotoRegister"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};