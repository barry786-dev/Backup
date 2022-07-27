let args = process.argv.slice(2);
/* let n = args[0-2;
let str = ''; */
/* for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    str += ' ';
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += '*';
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    str += ' ';
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += '*';
  }
  str += '\n';
} */
// lower part
// inverted pyramid
let n = args[0];
let str3 = '';
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str3 += ' ';
  }
  for (let j = 1; j < i * 2; j++) {
    str3 += args[1];
  }
  str3 += '\n';
}
//const  exec  = require('child_process').exec;
const colors = require('colors');
console.log(str3.rainbow.bold);
//exec("cowsay hallo");

/**
 * @author Mohamed Barry
 * @param {} a 
 * @param {*} b 
 * @param {*} c
 * @returns number
 */
function hi (a,b,c){
return 0;
}

hi();

// let args = process.argv.slice(2);
// /**
//  * this is for charactor
//  */
// let ch = args[0];
// let rows = args[1];
// // let rows = args[1]? args[1]: 5
// let columns = args[2];

// /**
//  * This Function Creates a stars
//  * @author Mostafa
//  * @param {boolean} character
//  * @param {number} rows
//  * @param {number} columns
//  */
// function createStars(character = '*', rows = 2, columns = 5) {
//   let str = '';
//   for (let j = 0; j < rows; j++) {
//     for (let i = 0; i < columns; i++) {
//       str += character;
//     }
//     str += '\n';
//   }
//   console.log(str);
// }

// createStars(ch, rows, columns);
// foo({});
// /**
//  *
//  * @param {object} a
//  * @returns
//  */
// function foo(a = {}) {
//   return 0;
// }

// console.log(args);