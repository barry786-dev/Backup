// this file accept 3 arguments:
// 1- number
// 2- operator etc +-*/
// 3- number
// the output should be the result

let args = process.argv.slice(2);
let result = `${args[0]} ${args[1]} ${args[2]}`;
console.log(eval(result));
