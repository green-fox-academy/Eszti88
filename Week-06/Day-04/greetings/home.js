'use strict';

const express = require('express');
const app = express();
const PORT = 3003;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hello World!',
    name: req.query.name,
  });
});

app.listen(PORT, () => {
  console.log(`Local server is running and listening to port ${PORT}.`);  
})
