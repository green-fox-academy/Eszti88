'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const mysql = require('mysql');
const assets = express.static('assets');
const app = express();
const PORT = 3000;

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);


const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfoxEszti88',
  database: 'quiz',
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to database.');
    return;
  } else {
    console.log('Connection established.');
  }
});


/*app.get('/game', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'assets/index.html'));
});*/

app.get('/game', (req, res) => {
  let randomNumber = Math.floor(Math.random() * 11);
  conn.query(`SELECT * FROM questions WHERE id = ${randomNumber};`, (error, questions) => {
    if (error) {
      console.log(error);
      res.status(400).json({ questions: 'Something went wrong.' });
      return;
    } else {
      conn.query(`SELECT * FROM answers WHERE question_id = ${randomNumber};`, (error, answers) => {
        if (error) {
          console.log(error);
          res.status(400).json({ answers: 'Something is not okay.' });
          return;
        } else {
          res.status(200).json({ questions: questions, answers: answers });
        }
      });
    }    
  });
});

app.get('/questions', (req, res) =>{
  conn.query('SELECT * FROM questions;', (error, questions) => {
    if (error) {
      console.log(error);
      res.status(400).json({ questions: 'Something went wrong.'});
      return;
    } else {
      res.status(200).json({ questions: questions});
    }
  });
});

app.listen(PORT, () => {
  console.log(`My local server is  running and listening to port ${PORT}.`);
});
