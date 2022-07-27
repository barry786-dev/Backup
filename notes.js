
let x = 0.3 - 0.2; //thirty cents minus 20 cents
let y = 0.2 - 0.1; //twenty cents minus 10 cents
console.log(x === y); //false: the two values are not the same!
console.log(x === 0.1); //false: .3-.2 is not equal to .1
console.log(y === 0.1); //true: .2-.1 is equal to .1

// quick view to make you happy
console.log(x); // 0.0998
console.log(y); // 0.1

timestamp = Date.now();
console.log(timestamp)
now = new Date();
console.log(now)
ms = now.getTime();
console.log(ms)
iso = now.toISOString();
console.log(iso)

let euro = "€";
let love = "❤";
euro.length // => 1: this character has one 16-bit element
love.length // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

console.log(parseInt(4.7, 10)); 
console.log(parseInt(4.7 * 1e22, 10)); // Very large number becomes 4
console.log(parseInt(0.00000000000434, 10)); // Very small number becomes 4

// warning for Deep Clone
function test() {
    'use strict';
  
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
  
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
  
    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}
  
    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
  
    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
  }
  
  test();