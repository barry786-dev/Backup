// start java script cosding here 
let str1 = 'Hello';
let str2 = 'Hello';
console.log(str1 === str2); // true

let num1 = 11;
let num2 = 11;
console.log(num1 === num2); // true

let obj4 = {};
let obj5 = {};
console.log(obj4 === obj5); // false

let arr1 = [];
let arr2 = [];
console.log(arr1 === arr2); // false
let ticket = { id: 0 };
if (ticket === { id: 0 }) {
    console.log('You win');
} else {
    console.log('You lose');
}

console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
console.log(Object.is({ id: 0 }, { id: 0 }));
console.log(Object.is(ticket, ticket));

const myArr = ['a'];
console.log(typeof myArr);
console.log(Array.isArray(myArr));
console.log(Array.isArray(ticket));