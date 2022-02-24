function add(x, y) {
    return x + y;
}

// 1, 2, 3

// console.log(add(1, 2, 3));
// console.log(add(1, add(2, 3)));

// every function has an implicit parameter: the arguments objec

// variadic function (function with a variable number of arguments)
function addArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// console.log(addArgs(1, 2, 3));

function addRest(...rest) {
    let sum = rest.reduce((previous, current) => previous + current);
    return sum;
}
console.log('reduce', addRest(1, 2, 3, 4));

function logNames(a, b, ...names) {
    console.log(a, b);
    names.forEach(item => {
        console.log(`${item}`);
    });
}
// logNames('Jim', 'Jane', 'Bob', 'Phil');

// Default parameters
function greet(greeting = 'hi', name = 'user') {
    return greeting + ', ' + name + '!';
}
let hiMo = greet('Hi', 'Mohammad');
// console.log(hiMo);

let welcome = greet('Welcome');
// console.log(welcome);

let greeting = greet();
// console.log(greeting);

let otherGreeting = greet(undefined, undefined);
// console.log(otherGreeting);

// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {
    let normalArray = Array.prototype.slice.call(arguments)
    // -- or --
    let normalArray = [].slice.call(arguments)
    // -- or --
    let normalArray = Array.from(arguments)
  
    let first = normalArray.shift()  // OK, gives the first argument
    let first = arguments.shift()    // ERROR (arguments is not a normal array)
  }
  
  // Now, you can easily gain access to a normal array using a rest parameter
  
  function f(...args) {
    let normalArray = args
    let first = normalArray.shift() // OK, gives the first argument
  }
