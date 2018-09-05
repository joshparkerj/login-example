import users from './data.json';

export function findUserByID(id){
  return users.find(user => user.id === id);
}

export function authenticateUser(email,password){
  const user = users.find(user => user.email === email);
  if (!user) return null;
  if (user.password === password) return user.id;
  return null;
}