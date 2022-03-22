import axios from 'axios';

import debug from 'debug';

const debugApiError = debug('api-error');

export function authenticateUser(email, password) {
  return axios.post('http://localhost:8080/authenticate-user', { email, password })
    .then((res) => {
      const userId = res.data.id;
      return userId;
    })
    .catch((err) => {
      debugApiError(err);
    });
}

export function findById(id) {
  return axios.get(`http://localhost:8080/user/${id}`)
    .then((res) => {
      const user = res.data;
      return user;
    })
    .catch(debugApiError);
}

export function submitUser({ name, email, password }) {
  return axios.post('http://localhost:8080/submit-user', { name, email, password })
    .then((res) => res)
    .catch((err) => {
      debugApiError(err);
    });
}
