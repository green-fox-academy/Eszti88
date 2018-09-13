'use strict';

const express = require('express');
const app = express();
const PORT = 3002;

//set the view engine to ejs
//o tell express to use EJS as our templating engine Express 
//will automatically look inside the views/ folder for template files
app.set('view engine', 'ejs');

//home page
app.get('/', (req, res) => {
  //render home.ejs
  //to render the view we pass it and send the HTML to the client
  //res.render('home'); helyett
  res.render('home', {
    title: 'Hello World!',
    header: 'Some text here',
  });
});

//start express app on port 3002
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);  
});