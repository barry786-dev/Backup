//'use strict';
/* console.log(this);
function foo() {
  console.log(this);
}
foo();
const arrow = () => console.log(this);
arrow(); */


const test = {
  prop: 42,
  func: ()=> {
    return this;
  },
};

console.log(test.func());
/* let arr = new Array('love', 'you', 'darling');
for (let key in arr) {
  console.log(typeof key);
} */

/* let str = 'love';
let str1 = 'you so much';
console.log(str.length);
str.length = function () {
  console.log('how are you');
};
str.length(); */

/* var myObject = {};
var otherObject = {};
console.log(myObject.toString());
myObject.__proto__.toString = function () {
  console.log('I just broke JavaScript a little.');
};
myObject.toString();{}.
let i = 0;
do {
console.log( i );
i++;
} while (i == 3); */
