const fs = require('fs');
const memoryStore = require('./data.json');

function authenticateUser(email, password) {
  const user = memoryStore.find((u) => u.email === email);
  if (!user) return null;
  if (user.password === password) return user.id;
  return null;
}

function findById(id) {
  const user = memoryStore.find((u) => Number(u.id) === Number(id));
  if (!user) return null;
  return user;
}

function addUser(user) {
  /* eslint-disable no-unused-vars */
  const { name, newUser } = user;
  memoryStore.push({
    ...newUser,
    id: 1 + Math.max(...memoryStore.map((e) => e.id)),
    firstName: user.name,
  });

  const success = 'The file was saved!';
  fs.writeFile('./data.json', JSON.stringify(memoryStore), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(success);
    }
  });
}

const users = {};
users.findById = findById;
users.authenticateUser = authenticateUser;
users.addUser = addUser;

module.exports = users;
