import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Register() {

  const [fields, setFields] = useState({ email: '', username: '', fullname: '', password: '' });

  const history = useHistory();

  const handleFields = (e: any) => {
    const { name, value } = e.target;

    return setFields({ 
      ...fields,
      [name]: value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const user = await api.post('/users/create', fields);
      
      alert('Account created, redirecting you to login...');

      history.push('/login');
    } catch (err) {
      alert('Error, please try again later.');
    }
  }

  return (
    <div className="register-container">
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Reactgram</h1>
          <p>Register to see photos and videos from your friends.</p>
          <input value={fields.email} onChange={handleFields} type="email" name="email" placeholder="E-mail" />
          <input value={fields.fullname} onChange={handleFields} type="text" name="fullname" placeholder="Full name" />
          <input value={fields.username} onChange={handleFields} type="text" name="username" placeholder="Username" />
          <input value={fields.password} onChange={handleFields} type="password" name="password" placeholder="Password" />
          <button>Register</button>
          <span>By registering, you agree with our Terms, Data Policies and Cookies Policies</span>
        </form>
        <div>
          <p>Aldready have an account? 
            <Link to="/login" className="gotoLogin"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};