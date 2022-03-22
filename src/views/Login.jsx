import React, { useState } from 'react';
import './login.css';
import { authenticateUser } from '../data/api.js';

const Login = function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    authenticateUser(email, password)
      .then((userId) => history.push(`/home/${userId}`))
      .catch((err) => {
        alert(`not authenticated: ${err}`);
      });
  };

  return (
    <div className="login">
      <div className="logo-container" />
      <input
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
      />
      <div className="login-submit" onClick={handleClick}>Sign In</div>
    </div>
  );
};

export default Login;
