const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 8080;

/*checking if local server is working or not
app.get('/', (req, res) => {
  res.send('OK!');
})*/

//set how and from where should express serve our static files
//to avoid errors in Inspect / console 
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
  //handles a query parameter and responds with a json
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: 2 * req.query.input
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
})

/* így ellenőrzöm postmanben:
localhost:8080/greeter/?name=Peti&title=student*/
app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });    
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!"
    });
  } else if (!req.query.title) {
    res.json({
      error: "Please provide a title!"
    });
  } else {
    res.json({
      error: "Please provide a title!"
    });
  }
})

app.get('/appenda/:word', (req, res) => {
  if (req.params.word) {
    res.json({
      appended: `${req.params.word}a`
    });
  } else {
    res.status(404).json({
      error: 'Not found.'
    });
  }
})

app.post('/dountil/:what', jsonParser, (req, res) => {
  let todo = req.params.what;
  let number = req.body.until;
  let result;

  if (todo === 'sum') {
    res.json({
      result: `${sum(number)}`
    });
  } else if (todo === 'factor') {
    res.json({
      result: `${factor(number)}`
    });
  } else {
    res.json({
      error: "Please provide a number!"
    });
  }
})

function sum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function factor(number) {
  let factor = 1;
  for (let i = 1; i <= number; i++) {
    factor *= i;
  }
  return factor;
}

app.listen(PORT, () => {
      console.log(`App successfully started and listening to port ${PORT}.`);
})
