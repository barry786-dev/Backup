//start
const url = require('url');
const http = require('http');
const fs = require('fs');
const { ReadDataFromFile, WriteDataToFile } = require('./models/fsModule');
//getting templeted
let template = '';

http
  .createServer((req, res) => {
    if (req.url === '/style.css') {
      // send css file
      ReadDataFromFile('./style.css')
        .then((data) => res.end(data))
        .catch((error) => {
          eval(error.text);
          console.log(error.kind);
        });
    }
    ReadDataFromFile('./index.html')
      .then((data) => (template = data))
      .catch((error) => {
        eval(error.text);
        console.log(error.kind);
      });
    //console.log(url.parse(req.url, true));
    const params = url.parse(req.url, true).query;
    const params_length = Object.keys(params).length;
    if (params.id) {
      ReadDataFromFile('./products.json')
        .then((data) => {
          const products = JSON.parse(data);
          const product = products.find((item) => item.id == params.id);
          let content = `<h1>${product.brand}</h1>
              <ul>
              <li>model: ${product.model}</li>
              <li>power: ${product.power}</li>
              <li>gear: ${product.gear}</li>
              <li>fuel: ${product.fuel}</li>
              <li>prise: ${product.prise}</li>
              <li>doors: ${product.doors}</li>
              </ul>
              <a href='/'>go to all products</a>`;
          res
            .writeHead(200, { 'content-type': 'text/html' })
            .end(
              template.replace('{{}}', content).replace('@@', product.brand)
            );
        })
        .catch((error) => {
          eval(error.text);
          console.log(error.kind);
        });
    } else if (params.doors && params_length == 1) {
      ReadDataFromFile('./products.json')
        .then((data) => {
          const products = JSON.parse(data.toString());
          /* let temp = [];
          console.log(params)
          console.log(Object.keys(params));
           Object.keys(params).forEach((key) => {
             temp = products.filter((p) => p[key] == params[key]);
           });
           console.log(temp); */
          const product = products.filter((p) => p.doors == params.doors);
          //   console.log(product)
          let container = `<div class="container">`;
          if (product.length > 0) {
            product.forEach((pro) => {
              container += `<div class='${
                pro.power >= 200 ? 'product backgroundcolor' : 'product'
              }'><h2>${pro.brand}</h2> <p>Prise: ${
                pro.prise
              }</p><a href="/?id=${pro.id}">Read more</a></div>`;
            });
            container += `</div><a href="/">Go To all products</a>`;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(
              template
                .replace('{{}}', container)
                .replace('@@', `All Products || ${params.doors}`)
            );
          } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(template.replace('{{}}', 'No Product Found!'));
          }
        })
        .catch((error) => {
          eval(error.text);
          console.log(error.kind);
        });
    } else if (params.brand) {
      console.log(params);
      // store the new incoming request params in products.json, you must auto increas the id
      // 1-get products
      // 2-create an object of product (increas id)
      // 3-push to products the new object
      // 4-resave the products in same file
      if (fs.existsSync('./products.json')) {
        async function foo() {
          try {
            const data = await ReadDataFromFile('./products.json');
            let products = JSON.parse(data);
            newID = products[products.length - 1].id + 1;
            new_product = { ...params, id: newID };
            products.push(new_product);
            const result = await WriteDataToFile(
              './products.json',
              JSON.stringify(products, null, 2)
            );
            eval(result);
          } catch (error) {
            console.log(error.code);
            if (error.code == 'ERR_INVALID_ARG_TYPE') {
              res
                .writeHead(200, { 'Content-Type': 'text/html' })
                .end('<h3>internal server error</h3>');
            } else {
              eval(error.text);
              console.log(error.kind);
            }
          }
        }
        foo();
      }
    } else {
      ReadDataFromFile('./products.json')
        .then((data) => {
          let container = `<div class='container'>`;
          let products = JSON.parse(data.toString());
          container += products.map((product) => {
            return `<div class='${
              product.power >= 200 ? 'product backgroundcolor' : 'product'
            }'><h2>${product.brand}</h2> <p>  Prise: ${
              product.prise
            }</p><a href=/?id=${product.id}>read more...</a></div>`;
          });
          container += `</div><hr>
          <form action='/' method='GET'>
          <input type='text' placeholder='doors' name='doors'/><br>
          <input type='submit' value='Search' />
          </form>
          <hr/>
          <form action='/' method='GET'>
          <input type='text' placeholder='brand' name='brand'/><br/>
          <input type='text' placeholder='model' name='model'/><br/>
          <input type='text' placeholder='power' name='power'/><br/>
          <input type='text' placeholder='gear' name='gear'/><br/>
          <input type='text' placeholder='fuel' name='fuel'/><br/>
          <input type='text' placeholder='prise' name='prise'/><br/>
          <input type='text' placeholder='doors' name='doors'/><br/>
          <input type='submit' value='insert'/>
          </form>`;
          container = container.replaceAll(',', '');
          res
            .writeHead(200, { 'content-type': 'text/html' })
            .end(
              template
                .toString()
                .replace('{{}}', container)
                .replace('@@', 'All Products')
            );
        })
        .catch((error) => {
          eval(error.text);
          console.log(error.kind);
        });
    }
  })
  .listen(3000, () => console.log('the server is running on port 3000'));

/* const fs = require('fs');
const http = require('http');
const url = require('url');
const { createSign } = require('crypto');
//getting template
let template = ``;
// fs.readFile('./index.html', (error, data) => {
//   if (error) throw error;
// template= data.toString()
// });
const server = http
  .createServer((req, res) => {
    // getting all products
    //for any request we send all products
    const params = url.parse(req.url, true).query;
    //  if (req.url === '/style.css') {
    //   // send css file
    //   fs.readFile('./style.css', (error, data) => {
    //     if (error) throw error;
    //     res.end(data.toString());
    //   });
    // }

    if (params.id) {
      //asking for some product
      fs.readFile('./products.json', (error, data) => {
        if (error) {
          res
            .writeHead(200, { 'content-type': 'text/html' })
            .end('<h1>internal Server error</h1>');
        } else {
          const products = JSON.parse(data.toString());
          const product = products.find((item) => item.id == params.id);
          //console.log(product)
          //geting template from index.html
          fs.readFile('./index.html', (error, html) => {
            if (error) {
              res.writeHead(200, { 'content-type': 'text/html' });
            } else {
              let content = `<h1>${product.brand}</h1>
                            <ul>
                                <li>model: ${product.model}</li>
                                <li>power: ${product.power}</li>
                                <li>gear: ${product.gear}</li>
                                <li>fuel: ${product.fuel}</li>
                                <li>prise: ${product.prise}</li>
                                <li>doors: ${product.doors}</li>
                            </ul>
                            <a href="/">Go To all products</a>
                    `;
              res.writeHead(200, { 'content-type': 'text/html' });
              res.end(
                html
                  .toString()
                  .replace('{{}}', content)
                  .replace('@@', product.brand)
              );
            }
          });

          //res.end(JSON.stringify(product));
        }
      });
    } else {
      fs.readFile('./products.json', (error, data) => {
        if (error) {
          res
            .writeHead(200, { 'content-type': 'text/html' })
            .end('<h2>Internal server error</h2>');
          console.log(error);
        } else {
          let container = `<div class="container">`;
          let products = JSON.parse(data.toString());
          //console.log(products);
          // loop for each product inside to generate a div for each item
          products.forEach((product) => {
            container += `<div class="product"><h2>${product.brand}</h2><p>Prise : ${product.prise}</p><a href='/?id=${product.id}'>Read more</a></div>`;
          });
          container += '</div>';
          //console.log(container);
          fs.readFile('./index.html', (err, htmlfile) => {
            if (err) {
              res
                .writeHead(200, { 'content-type': 'text/html' })
                .end('<h2>Internal server error</h2>');
              console.log(error);
            } else {
              res.writeHead(200, { 'cotent-type': 'text/tml' });
              res.end(
                htmlfile
                  .toString()
                  .replace('{{}}', container)
                  .replace('@@', 'All Products')
              );
            }
          });
        }
      });
    }
  })
  .listen(3000, () => console.log('server start at port 3000'));
 */
