// Answer Sheet - all answers should go here
// Abgabe Datei - Alle Lösungen müssen hier stehen.

/* 
except for A-1 and C, you will always write a function that returns values
Mit Ausnahme von A-1 und C, sollen immer Funktionen mit Rückgabewerten geschrieben werden.
*/

/* A-1 (5)
define and fill an object
Definiere und fülle ein Objekt */
// const profileData = null;
let profileData = {
  name: 'Mohamed',
  surname: 'Barry',
  age: 44,
  city: 'cologn',
};

/* A-2 (5) */
// const convertObjectToArray = null;
let example = {
  1: 10,
  2: 20,
  3: 30,
};
function convertObjectToArray(obj) {
  return Object.entries(obj);
}
console.log(convertObjectToArray(example));

// array of arrays of key/value pairs
/* B-1 (10) */
// const convertArrayData = null;
let beverages = ['coffee', 'tea', 'juice'];
function convertArrayData(arr) {
  let firstItem = arr[0];
  arr[0] = arr[1];
  arr[1] = firstItem;
  arr[2] = 'milk';
  return arr;
}
console.log(convertArrayData(beverages));

/* B-2 (15) */
// const convertArraysToObject = null;
let cities = ['Berlin', 'Hamburg', 'Munich', 'Stuttgart', 'Duesseldorf'];
let areas = [
  '891.68 km2',
  '755.3 km2',
  '310.7 km2',
  '207.35 km2',
  '217.41 km2',
];
function convertArraysToObject(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.reduce(function (accu, curr, index) {
      accu[curr] = arr2[index];
      return accu;
    }, {});
  }
}
console.log(convertArraysToObject(cities, areas));
console.log(cities);

/* B-3 (10) */
// const createGrid = null;
function createGrid(size, char) {
  let nestedarray = [];
  let pushedarry = [];
  for (i = 0; i <= size - 1; i++) {
    pushedarry.push(char);
  }
  for (i = 0; i <= size - 1; i++) {
    nestedarray.push(pushedarry);
  }

  return nestedarray;
}

console.log(createGrid(3, '*'));

/* B-4 (10) */
// const wordConverter = null;
let adjectives = ['smart', 'kind', 'sweet', 'small', 'clear'];
function wordConverter(arr, str) {
  arr = arr.map((element) => element + str);
  return arr;
}
console.log(wordConverter(adjectives, 'er'));
/* B-5 (10) */
// const calculateHours = null;
function calculateHours(arr) {
  let total = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    total = total + (arr[i].end - arr[i].start);
  }
  return total;
}
const hourTracking = [
  { day: 'Monday', start: 8, end: 17 },
  { day: 'Tuesday', start: 9, end: 15 },
  { day: 'Wednesday', start: 10, end: 18 },
  { day: 'Thursday', start: 7, end: 14 },
  { day: 'Friday', start: 6, end: 12 },
];
console.log(calculateHours(hourTracking));

/* C (10) 
write a class
schreibe eine Klasse */
// const Course = null;

class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    return `The classroom should be ${this.number * 2}m².`;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}
let course = new Course('John', 'Web Devlopment', '22');
console.log(course.spaceNeeded());
console.log(course.details());
/* D-1 (10) */
// const capitalizeFirstLetter = null;
function capitalizeFirstLetter(str) {
  if (typeof str === 'number') {
    str = str.toString();
  }
  if (typeof str === 'boolean') {
    str = String(str);
  }
  let arr = str.split(' ');
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return (str = arr.join(' '));
}
console.log(capitalizeFirstLetter('hey there'));
console.log(capitalizeFirstLetter(true));
/* D-2 (15) */
// const validPin = null;
function validPin(Pin) {
  if (isNaN(Pin)) return false;

  if (!(Pin.length === 4)) return false;

  let rep = [0, 0, 0, 0];
  for (i = 0; i < Pin.length; i++) {
    for (x = 0; x < Pin.length; x++)
      if (Pin[i] === Pin[x]) {
        rep[i]++;
      }
  }
  for (i = 0; i < rep.length; i++) {
    if (rep[i] === 4) return false;
  }

  if (!(Pin[3] % 2 === 0)) return false;

  let Addup = 0;
  for (i = 0; i < Pin.length; i++) {
    Addup += Math.floor(Pin[i]);
  }
  if (Addup < 5) return false;

  return true;
}
console.log(validPin("1234"));
console.log(validPin("1235"));// last number should be even
  
console.log(validPin("wwww"));// should only consist of numbers
 
console.log(validPin("12345"));// should be 4 digits, not 5
 
console.log(validPin("2222"));// not at least 2 different digits
 
console.log(validPin("1000"));// sum of digits is less 5
 
console.log(validPin("2224"));

// Do not edit or answer below this line
// Bearbeite die letzte Zeile nicht. Das wird vom Unit-Test gebraucht
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
  profileData,
  convertObjectToArray,
  convertArrayData,
  convertArraysToObject,
  createGrid,
  wordConverter,
  calculateHours,
  Course,
  capitalizeFirstLetter,
  validPin,
};
