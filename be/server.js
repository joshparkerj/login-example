// server.js
// 9/15/2018

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000']}));

app.get('/health', (req,res) => {
  res.send('ok');
  console.log('health check ok');
})

app.listen(8080, function(){ // function expression used here
  console.log(`http://localhost:${this.address().port}`);
  // so that this gets the context
})