import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import './login.css';
import 'react-toastify/dist/ReactToastify.css';
import { authenticateUser } from '../data/api';

const Login = function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    authenticateUser(email, password)
      .then((userId) => navigate(`/home/${userId}`))
      .catch((err) => {
        toast.error(`not authenticated: ${err}`);
      });
  };

  return (
    <div className="login">
      <ToastContainer />
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
      <button type="submit" className="login-submit" onClick={handleClick}>Sign In</button>
    </div>
  );
};

export default Login;
