import React from 'react';
import PropTypes from 'prop-types';

const User = function User({ user }) {
  if (!user) {
    return <div className="user">nothing to see here</div>;
  }
  return (
    <div className="user">
      <p>
        First Name:
        {user.firstName}
      </p>
      <p>
        Email:
        {user.email}
      </p>
      <p>
        Password:
        {user.password}
      </p>
      <p>
        User ID:
        {user.id}
      </p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    id: PropTypes.string,
  }),
};

User.defaultProps = {
  user: null,
};

export default User;
