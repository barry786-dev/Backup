const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/', (req, res) => {
  res.render('mainTemplate', {
    title: 'Home Page',
    content: path.join(__dirname, '..', 'views', 'content', 'home'),
  });
});

module.exports = route;
