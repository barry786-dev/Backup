const express = require('express');
//const logger = require('morgan');
const { log } = require('console');
require('dotenv').config();
const path = require('path');
const Home = require('./routes/home');
const About = require('./routes/about');
const Products = require('./routes/products');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app.use(logger('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(
  '/bootstrap',
  express.static(path.join(__dirname, 'node_modules/bootstrap'))
);
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')));

app.use('/', Home);
app.use('/about', About);
app.use('/products', Products);

// to set 404 page
app.get('*', (req, res) => {
  res.render('mainTemplate', {
    title: 'Not Found',
    content: path.join(__dirname, 'views', 'content', 'error'),
    error: 'page is not exist',
  });
});

app.listen(app.get('port'), () => {
  log(`server is running on port ${app.get('port')}`);
});
