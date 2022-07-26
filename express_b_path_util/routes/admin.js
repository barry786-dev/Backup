const { log } = require('console');
const path = require('path');
const express = require('express');
const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  /* res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); */
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  log(req.body);
  res.redirect('/');
});

module.exports = router;
