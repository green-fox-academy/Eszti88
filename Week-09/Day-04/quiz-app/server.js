'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = ('path');
const mysql = require('mysql');
const assets = express.static('assets');
const app = express();
const port = 3000;

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(assets);


app.get('/game', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`My local server is  running and listening to port ${PORT}.`);
});
