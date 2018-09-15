import users from './data.json';
import axios from 'axios';

export function findUserByID(id){
  return users.find(user => user.id === id);
}
/*
export function authenticateUser(email,password){
  const user = users.find(user => user.email === email);
  if (!user) return null;
  if (user.password === password) return user.id;
  return null;
}
*/

export function authenticateUser(email, password) {
  return axios.get(`http://localhost:8080/authenticate-user?email=${email}password=${password}`)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })
}