import axios from 'axios';

export function authenticateUser(email, password) {
  const queryString = `?email=${email}&password=${password}`;
  return axios.get(`http://localhost:8080/authenticate-user${queryString}`)
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

export function submitUser(user) {
  const q = `?name=${user.name}&email=${user.email}&password=${user.password}`;
  return axios.get(`http://localhost:8080/submit-user${q}`)
    .then((res) => res)
    .catch((err) => {
      console.error(err);
    });
}
