// server.js
// 9/15/2018

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const users = require('./users');


app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000']}));

app.get('/health', (req,res) => {
  res.send('ok');
  console.log('health check ok');
})

app.get('/authenticate-user', (req,res) => {
  const id = users.authenticateUser(req.query.email,req.query.password);
  if (id) {
    res.send({id: id});
  }else{
    res.status(403).send('either email or password is incorrect');
  }
})

app.get('/user/:id', (req,res) => {
  const user = users.findById(req.params.id);
  if (user){
    res.send(user);
  }else{
    res.status(404).send(`user ${req.params.id} not found`);
  }
})

app.listen(8080, function(){ // function expression used here
  console.log(`http://localhost:${this.address().port}`);
  // so that this gets the context
})