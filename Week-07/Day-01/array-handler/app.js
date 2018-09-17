const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('OK!')
})

app.post('/arrays', jsonParser, (req, res) => {
  let todo = req.body.what;
  let array = req.body.numbers;
  let result;

  if (!todo || !array) {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  } else if (todo === 'sum') {
    res.json({
      result: `${sum(array)}`
    });
  } else if (todo === 'multiply') {
    res.json({
      result: `${multiply(array)}`
    });
  } else if (todo === 'double') {
    res.json({
      result: `${double(array)}`
    });
  } 

  function sum(array) {
    let sum = 0;
    array.forEach(elem => {
      sum += elem;
    });
    return sum;
  }
  
  function multiply(array) {
    let multiply = 1;
    array.forEach(elem => {
      multiply *= elem;
    });
    return multiply;
  }
  
  function double(array) {
    let double = [];
    array.map(elem => {
      double.push(elem * 2);
    });
    return double;
  }
})

app.listen(PORT, () => {
  console.log(`App successfully started and listening to port ${PORT}.`);  
})
