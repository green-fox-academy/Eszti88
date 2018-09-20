'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 9000;

//connecting to mysql:
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfoxEszti88',
  database: 'reddit',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting', err.message);
    return;
  }
  console.log('Connection established.');  
});

//checking if server is running:
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

//getting all the details from posts table of my reddit database:
app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.send(rows);
  });
});

//adding data to database
app.post('/posts', jsonParser, (req, res) => {
  let title = req.body.title;
  let url = req.body.url;

  if (title && url) {
    conn.query(`INSERT INTO posts (title, url) VALUES ('${title}', '${url}');`, (err, result) => {
      if (err) {
        console.log(err.message);
        return;        
      }
      conn.query(`SELECT * FROM posts WHERE id = ${result.insertId};`, (err, newPost) => {
        if (err) {
          console.log(err.message);
          return;
        } else {
          res.status(200).json({
            newPost,
          });
        }
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running and listening to port ${PORT}.`);  
})