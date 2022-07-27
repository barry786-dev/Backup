const express = require('express');
const route = express.Router();
const fs = require('fs');
const path = require('path');
route.get('/', (req, res) => {
  const chosen_categ = req.query.category;
  //1-read data file
  fs.readFile(
    path.join(__dirname, '..', 'data', 'products.json'),
    'utf-8',
    (error, data) => {
      let categories = [];
      let products;
      let filteredCat;
      if (error) {
        return res.render('mainTemplate', {
          title: 'Error',
          content: path.join(__dirname, '..', 'views', 'content', 'error'),
          error: error.message,
        });
      }
      products = JSON.parse(data);
      products.forEach((product) => {
        // check if product.category NOT exist in categories
        if (!categories.includes(product.category))
          categories.push(product.category);
      });
      filteredCat = products.filter(
        (product) => product.category == req.query.category
      );
      res.render('mainTemplate', {
        title: `${chosen_categ}-Page`,
        content: path.join(__dirname, '..', 'views', 'content', 'products'),
        categories: categories,
        data: chosen_categ === 'all' || !chosen_categ ? products : filteredCat,
        selected_item:
          chosen_categ === 'all' || !chosen_categ ? 'all' : chosen_categ,
      });
    }
  );
});

module.exports = route;
