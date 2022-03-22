import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.css';
import User from './User';
import { findById } from '../data/api';

const Home = function Home({ match }) {
  const [id, setId] = useState('');
  const [user, setUser] = useState({});
  const [showUser, setShowUser] = useState({});

  useEffect(() => {
    findById(match.params.id)
      .then((res) => {
        setUser(res);
      })
      .catch(console.error);
  }, []);

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  const handleClick = () => {
    findById(id)
      .then((res) => {
        setShowUser(res);
      })
      .catch(console.error);
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

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Home;
