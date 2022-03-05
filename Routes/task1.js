const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const taske1Router = require('./routes/task1Router');
app.use('/experiences', taske1Router);

app.get('/', (req, res) => {
  res.redirect(301, '/home');
});
app.get('/home', (req, res) => {
  res.send('welcome home');
});
app.get('/about', (req, res) => {
  res.send('this is about me');
});

app.get('/services/:service/:number', (req, res) => {
  const { service, number } = req.params;
  res.send(`this is ${service} ${number} page`);
});

app.get('/response', (req, res) => {
  //res.redirect('https://www.google.com')
  // const obj = {
  //     prop1: 1,
  //     prop2: 'text',
  //     prop3: true
  // }
  //res.json(obj)
  res.sendFile(path.join(__dirname, 'README.md'));
  // res methods:
  // 1- res.redirect('link')
  // 2- res.json(object)
  // 3- res.sendFile(path to file)
  // 4- res.render(view file name)
});

app.get('/page1', (req, res) => {
  res.redirect('/page2');
});
app.get('/page2', (req, res) => {
  res.redirect('/page1');
});

app.listen(port, () => {
  console.log(`the server is running at ${port}`);
});
