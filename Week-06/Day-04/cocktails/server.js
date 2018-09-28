'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3005;

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let filteredDrinks = [];
  for (let i = 0; i < cocktails.length; i++) {
    if (req.query.alcohol) {
      filteredDrinks = cocktails[i].contains.filter(elem === req.query.alcohol)
    res.render('home', {
      alcoholList,
      filteredDrinks,
    });
  } else {
    res.render('home', {
      alcoholList,
      cocktails,
    });
  }
}
});

app.listen(PORT, () => {
  console.log(`Local server is running and listening to port ${PORT}`);
});