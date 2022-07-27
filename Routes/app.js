const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const servicesRouter = require('./routes/servicesRouter');
app.use('/services', servicesRouter);
app.get('/', (req, res) => {
  res.send('hello');
});
/* app.get('/services', (req, res) => {
  res.send('this is services');
});

app.get('/services/service1', (req, res) => {
  res.send('service1');
});
app.get('/services/service2', (req, res) => {
  res.send('service2');
});
app.get('/services/service3', (req, res) => {
  res.send('service3');
}); */
app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
