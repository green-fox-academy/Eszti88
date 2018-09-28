'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 9876;

//connecting to mysql:
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfoxEszti88',
  database: 'demo',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting', err.message);
    return;
  }
  console.log('Connection established.');
});

//checking if server is running:
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

//getting all the details from posts table of my reddit database:
app.get('/all', (req, res) => {
  conn.query('SELECT * FROM friday;', (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.status(200).json(rows);
  });
});

//adding data to database
app.post('/add', jsonParser, (req, res) => {
  let name = req.body.name;
  let classname = req.body.class;

  if (name && classname) {
    conn.query(`INSERT INTO friday (name, class) VALUES ('${name}', '${classname}');`, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      conn.query(`SELECT * FROM friday WHERE id = ${result.insertId};`, (err, newPost) => {
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
app.put('/up/:id', jsonParser, (req, res) => {
  let id = req.params.id; 

  if (id) {
    conn.query(`UPDATE friday SET score = score + 1 WHERE id = ${id};`, (err, result) => {
       
      if (err) {
        console.log(err.message);
        return;
      }
      conn.query(`SELECT * FROM friday WHERE id = ${id};`, (err, incScore) => {      
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
app.put('/down/:id', jsonParser, (req, res) => {
  let id = req.params.id;

  if (id) {
    conn.query(`UPDATE friday SET score = score - 1 WHERE id = ${id};`, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      conn.query(`SELECT * FROM friday WHERE id = ${id};`, (err, decScore) => {
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
app.delete('/:id', (req, res) => {
  let id = req.params.id;

  if (id) {
    conn.query(`DELETE FROM friday WHERE id = ${id};`, (err, result) => {
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