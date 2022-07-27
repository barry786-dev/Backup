const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/', (req, res) => {
  res.render('mainTemplate', {
    title: 'About Page',
    content: path.join(__dirname,'..', 'views', 'content', 'about'),
  });
});

module.exports = route;
