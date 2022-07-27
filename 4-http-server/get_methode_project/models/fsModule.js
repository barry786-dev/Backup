const fs = require('fs');

const ReadDataFromFile = (fileToRead) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileToRead, (error, data) => {
      if (error) {
        reject({
          error: 'error',
          text: `res
      .writeHead(200, { 'Content-Type': 'text/html' })
      .end('<h3>internal server error</h3>');`,
          kind: error,
        });
      } else {
        resolve(data.toString());
      }
    });
  });
};

const WriteDataToFile = (fileName, DataToWrite) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, DataToWrite, (error) => {
      if (error) {
        console.log('error promise side');
        reject({
          error: 'error',
          text: `res
      .writeHead(200, { 'Content-Type': 'text/html' })
      .end('<h3>internal server error</h3>');`,
          kind: error,
        });
      } else
        resolve(`res
      .writeHead(200, { 'Content-Type': 'text/html' })
      .end('<h3>New Product added</h3>')`);
    });
  });
};

/* const WriteDataToFile = (fileName, DataToWrite) => {
  return new Promise((resolve, reject) => {
    fs.writeFileSync(fileName, DataToWrite);
    resolve(`res
      .writeHead(200, { 'Content-Type': 'text/html' })
      .end('<h3>New Product added</h3>')`);
    reject({
      error: 'error',
      text: `res
      .writeHead(200, { 'Content-Type': 'text/html' })
      .end('<h3>internal server error</h3>');`,
    });
  });
}; */

module.exports = { ReadDataFromFile, WriteDataToFile };
