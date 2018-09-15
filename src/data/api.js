//import users from './data.json';
/*
export function findUserByID(id){
  return users.find(user => user.id === id);
}
*/
/*
export function authenticateUser(email,password){
  const user = users.find(user => user.email === email);
  if (!user) return null;
  if (user.password === password) return user.id;
  return null;
}
*/
import axios from 'axios';

export function authenticateUser(email, password) {
  const queryString = `?email=${email}&password=${password}`;
  return axios.get(`http://localhost:8080/authenticate-user${queryString}`)
  .then(res => {
    const userId = res.data.id;
    return userId;
  })
  .catch(err => {
    console.error(err);
  })
}

export function findById(id) {
  return axios.get(`http://localhost:8080/user/${id}`)
    .then (res => {
      const user = res.data;
      console.log(user);
      return user;
    })
    .catch(console.error);
}