import axios from 'axios';

export function authenticateUser(email, password) {
  return axios.post('http://localhost:8080/authenticate-user', { email, password })
    .then((res) => {
      const userId = res.data.id;
      return userId;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function findById(id) {
  return axios.get(`http://localhost:8080/user/${id}`)
    .then((res) => {
      const user = res.data;
      return user;
    })
    .catch(console.error);
}

export function submitUser({ name, email, password }) {
  return axios.post('http://localhost:8080/submit-user', { name, email, password })
    .then((res) => res)
    .catch((err) => {
      console.error(err);
    });
}
