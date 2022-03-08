const express = require('express');
const logger = require('morgan');
const fs = require('fs');
require('dotenv').config();
const path = require('path');
const app = express();


// set variables
app.set('port', process.env.PORT || 3001)
// set view engine
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))
// use logger
app.use(logger('dev'))
// set public folder
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')))
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')))

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));


// settings routes
app.use('/', Home)
app.use('/about', About)
app.use('/products', Products)
// to set 404 page
app.get('*', (req, res)=>{
    res.render('mainTemplate', {title:'Not Found', content: 'error', error:"Page Not Found"})
})

app.listen(app.get('port'), ()=>{
    log(`Server is running on port ${app.get('port')}.`)
})
