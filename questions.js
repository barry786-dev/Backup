Number.isNaN =
  Number.isNaN ||
  function isNaN(input) {
    return typeof input === 'number' && input !== input;
  };

//////////////////////////////////

function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName()); // What is logged?

/////////////////////////////////////////////
let arrayToTest = [1, 2, 3, 4];
function contain2(arr) {
  arr.forEach((element) => {
    if (element === 2) {
      return 'contain 2';
    }
  });
  return 'not contain 2';
}
console.log(contain2(arrayToTest));

function contain2_2(arr) {
  for (i=0;i<arr.length;i++){
    if (arr[i]===2){
      return 'contain 2';
    }
  }
  return 'not contain 2';
}
console.log(contain2_2(arrayToTest));
