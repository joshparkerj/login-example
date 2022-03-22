// server.js
// 9/15/2018

const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(rateLimit({ windowMs: 10000, max: 100 }))

const cors = require('cors');
const users = require('./users');

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'] }));

app.get('/health', (_, res) => {
  res.send('ok');
  console.log('health check ok');
});

app.post('/authenticate-user', (req, res) => {
  const id = users.authenticateUser(req.body.email, req.body.password);
  if (id) {
    res.send({ id });
  } else {
    res.status(403).send('either email or password is incorrect');
  }
});

app.get('/user/:id', (req, res) => {
  const user = users.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(`user ${Number(req.params.id)} not found`);
  }
});

app.post('/submit-user', (req, res) => {
  users.addUser({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.send('added');
});

app.listen(8080, function () { // function expression used here
  console.log(`http://localhost:${this.address().port}`);
  // so that this gets the context
});
