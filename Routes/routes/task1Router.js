const express = require('express');
const task2router = require('./task2Router');

const tske1Router = express.Router();

tske1Router.use('/programing', task2router);

tske1Router.get('/', (req, res) => {
  res.send('this is experence page');
});

tske1Router.get('/fronted', (req, res) => {
  res.send('this is front end skills');
});

tske1Router.get('/backend', (req, res) => {
  res.send('this is backend skills');
});

/* tske1Router.get('/programing', (req, res) => {
  res.send('this is programing skills');
}); */

module.exports = tske1Router;
