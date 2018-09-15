const memoryStore = require('./data.json');

function authenticateUser(email, password) {
  const user = memoryStore.find(user => user.email === email);
  if (!user) return null;
  if (user.password === password) return user.id;
  return null;
}

function findById(id) {
  const user = memoryStore.find(user => Number(user.id) === Number(id));
  if (!user) return null;
  return user;
}

const users = {};
users.findById = findById;
users.authenticateUser = authenticateUser;

module.exports = users;