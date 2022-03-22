import React, { useState } from 'react';
import './adduser.css';
import { ToastContainer, toast } from 'react-toastify';
import { submitUser } from '../data/api';

const AddUser = function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    submitUser({ name, email, password });
    toast.success('Thank you!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="add-user">
      <ToastContainer />
      <label htmlFor="name">
        First Name:
        <input name="name" id="name" value={name} onChange={({ target }) => setName(target.value)} />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input name="email" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input name="password" id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      </label>
      <br />
      <button type="submit" onClick={handleClick}>submit</button>
    </div>
  );
};

export default AddUser;
