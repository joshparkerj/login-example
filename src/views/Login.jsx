import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';

import './login.css';
import 'react-toastify/dist/ReactToastify.css';
import { authenticateUser } from '../data/api';

const Login = function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    authenticateUser(email, password)
      .then((userId) => history.push(`/home/${userId}`))
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
