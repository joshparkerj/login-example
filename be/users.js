const memoryStore = require('./data.json');
const fs = require('fs');


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

function addUser(user) {
  user.id = 1 + Math.max(...memoryStore.map(e => e.id));
  user.firstName = user.name;
  delete user.name;
  memoryStore.push(user);
  const success = 'The file was saved!';
  fs.writeFile('./data.json',JSON.stringify(memoryStore), err => {
    if(err){
      console.error(err);
    }else{
      console.log(success);
    }
  });
}

const users = {};
users.findById = findById;
users.authenticateUser = authenticateUser;
users.addUser = addUser;

module.exports = users;