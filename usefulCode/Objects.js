// start java script cosding here 
let tinyObj = {
    a: 1, 
    b: 2
}
console.log('Object keys', Object.keys(tinyObj)); // array of the object keys
console.log('Object values', Object.values(tinyObj)); // array of object values
console.log('Object key/value pairs', Object.entries(tinyObj)); // array of arrays of key/value pairs
console.log('Object from entries', Object.fromEntries(Object.entries(tinyObj))); // construct object from entries


const user = {
    firstName: 'Donald',
    lastName: 'Knuth',
    linkedIn: '',
    age: 32,
    publications: ['The TeX Book', 'The Art of Computer Programming'],
    getMainPub: function() { // template strings, string interpolation
        return `The main publication of ${this.firstName} ${this.lastName} is ${this.publications[1]}.`;
    }, // trailing comma
};

for (let key in user) {
    console.log(`${key} is of type ${typeof key}.`);
}

// 3 ways of creating objects
// 1. creating an object with an object literal
const obj1 = {};
obj1.firstName = 'Joe';
console.log(obj1);

// 2. creating an object with the "new" keyword and the Object constructor function
const obj2 = new Object(); // creates an empty object

// 3. creating an object wtih Object.create(prototype);
const obj3 = Object.create(obj1); // creates a new object that inherits from obj1
console.log(obj3.firstName); // 'Joe'