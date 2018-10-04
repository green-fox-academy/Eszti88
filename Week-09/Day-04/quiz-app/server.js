'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const mysql = require('mysql');
const assets = express.static('assets');
const app = express();
const PORT = 3000;


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


app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);


app.get('/game', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(PORT, () => {
  console.log(`My local server is  running and listening to port ${PORT}.`);
});
