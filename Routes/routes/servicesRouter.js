const express = require('express');
const servicesRouter = express.Router();
const service3router = require('./service3Router');

servicesRouter.get('/', (req, res) => {
  res.send('this is services page');
});

servicesRouter.get('/service1', (req, res) => {
  res.send('this is service1');
});
servicesRouter.get('/service2', (req, res) => {
  res.send('this is service2');
});
servicesRouter.use('/service3', service3router);
/* servicesRouter.get('/service3', (req, res) => {
  res.send('this is service3');
}); */

module.exports = servicesRouter;
