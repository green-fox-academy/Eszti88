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

conn.connect(function (err) {
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
    res.status(200).json({
      rows
    });
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
          res.status(200).json(newPost);
        }
      });
    });
  }
});

//upvoting:
app.put('/posts/:id/upvote', jsonParser, (req, res) => {
  let id = req.params.id;
  //console.log(id);  

  if (id) {
    conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${id};`, (err, result) => {
      //console.log('Update has happened.');      
      if (err) {
        console.log(err.message);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${id};`, (err, incScore) => {
        //console.log('Select has happened.');        
        if (err) {
          console.log(err.message);
          return;
        } else {
          res.status(200).json(incScore);
        }
      });
    });
  }
});

//downvoting:
app.put('/posts/:id/downvote', jsonParser, (req, res) => {
  let id = req.params.id;

  if (id) {
    conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${id};`, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${id};`, (err, decScore) => {
        if (err) {
          console.log(err.message);
          return;
        } else {
          res.status(200).json(decScore);
        }
      });
    });
  }
});

//delete post:
app.delete('/posts/:id', (req, res) => {
  let id = req.params.id;

  if (id) {
    conn.query(`DELETE FROM posts WHERE id = ${id};`, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      } else {
        res.status(200).json({
          status: `post with id ${id} has been successfully removed.`
        });
      }
    });
  }  
});

app.listen(PORT, () => {
  console.log(`The server is running and listening to port ${PORT}.`);
})