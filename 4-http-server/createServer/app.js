// to create server in nodejs use 'http' library
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.headers)
  fs.writeFile('req.json', JSON.stringify(req.headers, null, 2), (error) => {
    if (error) throw error;
  });
  //console.log(req.url)
  /* res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      name: 'Mostafa',
      age: 30,
    },null,2)
  ); */
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('index.html', (error, data) => {
        if (error) throw error;
        res.end(data.toString());
      });
      break;
    case '/home':
      res.writeHead(301, { Location: '/' }).end();
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('about.html', (error, data) => {
        if (error) throw error;
        res.end(data.toString());
      });
      break;
    case '/api':
     
      fs.readFile('req.json',(error, data) => {
        if (error) throw error;
         res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data.toString());
      });
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h3>NO resource found</h3>');
  }

  /* if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
      if (error) throw error;
      res.end(data.toString());
    });
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('about.html', (error, data) => {
      if (error) throw error;
      res.end(data.toString());
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h3>NO resource found</h3>');
  } */
});

/* const server = http.createServer((req, res) => {
  // console.log(req.headers)
  // console.log(req.url);
  // store req.headers in file
  fs.writeFile('req.json', JSON.stringify(req.headers,null,2), (error) => {
    if (error) throw error
    console.log('header saved');
  });
//   res.writeHead(200,{"content-type" :"application/json"})
  //res.end('<h1>Hello world</h1>')
//   res.end(JSON.stringify({
//       name:"hallo",
//       age: 30
//   }))
res.writeHead(200, { 'content-type': 'text/html' });
res.end('wellcome from nodejs server')
}); */

server.listen(3000, () => console.log('The server is running on port 3000'));
