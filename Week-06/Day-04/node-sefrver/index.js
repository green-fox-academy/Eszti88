'use strict';

const express = require('express'); // a node module mappából szeretném az expresst használni
const path = require('path');
const app = express();              //szeretnék egy express szervert
const PORT = 3000;                  //nagybetűvel, igen, mert állandónak tekintjük

app.get('/', (req, res) => {
  //console.log(__dirname);   //alulvonás, alulvonás dirname: mindig elhoz ebbe a mappába, nem kell megadni az útvonalat
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
    status: 200,
  });
});

/*app.get('/assets/style.css', (req, res) => {
  //console.log(__dirname);   //alulvonás, alulvonás dirname: mindig elhoz ebbe a mappába, nem kell megadni az útvonalat
  res.sendFile(path.join(__dirname, 'assets', 'style.css'));
});*/

//minden statikus fájl esetén, az előző css-es megoldás helyett, sok-sok file esetére:
app.use('/assets', express.static('assets'));

//console.log('hopsz'); helyett:
app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});

//kiírja: The server is up and running on port 3000
//url: localhost:3000/ping, kiírja nekem, hogy pong
