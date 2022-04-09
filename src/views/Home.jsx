import React, { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import debug from 'debug';

import './home.css';
import User from './User';
import { findById } from '../data/api';

const debugHome = debug('home');

const Home = function Home() {
  const [id, setId] = useState('');
  const [user, setUser] = useState({});
  const [showUser, setShowUser] = useState({});
  const match = useMatch();

  useEffect(() => {
    findById(match.params.id)
      .then((res) => {
        setUser(res);
      })
      .catch(debugHome);
  }, []);

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  const handleClick = () => {
    findById(id)
      .then((res) => {
        setShowUser(res);
      })
      .catch(debugHome);
  };

  if (!user || !user.id) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      Hello from Home.js!
      <p>
        Hello
        {user.firstName}
        !
      </p>
      <input
        placeholder="id"
        value={id}
        onChange={handleChange}
        name="id"
      />
      <input
        type="submit"
        value="Submit"
        name="submit"
        onClick={handleClick}
      />

      <User user={showUser} />
    </div>
  );
};

export default Home;
