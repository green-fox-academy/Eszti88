const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8090;

app.use('/assets', express.static('assets'));

let conn = mysql.createConnection ({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfoxEszti88',
  database: 'bookstore',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

//Create an API endpoint that lists all book names
app.get('/', function(req, res) {
  conn.query('SELECT * FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.message);
      return;
    }
    res.send(rows);
  });
});

/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})*/

app.listen(PORT, () => {
  console.log(`App is running and listening to port ${PORT}.`);  
})

//conn.end();