const express = require('express');
const service3router = express.Router();

service3router.get('/', (req, res) => {
  res.send('this is service3');
});
service3router.get('/1', (req, res) => {
  res.send('this is service3/1');
});
service3router.get('/2', (req, res) => {
  res.send('this is service3/2');
});

module.exports = service3router;
