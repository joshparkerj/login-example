import React from 'react';

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

export default User;
