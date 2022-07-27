//const params = url.parse(req.url, true).query;
//require express
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
// create public middleware
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname,'public')))
//app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  //res.send('hallo FBW E05-1');
  //res.send('<h1>this is contact us page</h1>')
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
  //res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
// make app listen for 3000
app.listen(port, () => {
  console.log(`node application is listening to port ${port}`);
});
