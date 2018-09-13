'use strict';

const express = require('express');
//const path = require('path');
const app = express();
const PORT = 3001;   

//app.use helyett set, mert konfigurációt állítok, csak view engine esetén kell használni (milyen kulcsot milyen értékhez rendelek):
app.set('view engine', 'ejs');

//először minfig ezt hozzuk létre: app.get és app.listen, ez váljon szokássá, hogy működik-e a cucc
app.get('/', (req, res) => {
  //res.send('hello'); helyett
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
    withGoodBye: req.query.withGoodBye === 'false',
  });
});

app.get('/products/:id', (req, res) => {
  //console.log(req.query);  
  //console.log(req.query.fox);  
  //res.send('hello'); helyett
  res.render('home', {
    title: 'Product page',
    header: req.params.id,    //5 helyett, 4 helyett
    withGoodBye: req.query.withGoodBye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);  
});