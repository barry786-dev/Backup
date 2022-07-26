const fs = require('fs');
// to make terminal as in\output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('please enter your first name:\n', firstName=>{
//     rl.question('please enter your last name:\n', lastName=>{
//         console.log(`Your fullname is ${firstName} ${lastName}`)
//         process.exit()
//     })
// })
/**
 * 1- let the user enter the following data:
 *      a- first name
 *      b- last name
 *      c- age (18- 100) number
 *      d- grades (0==>100)
 * 2- create an Object with this data
 *      {firstName:"", lastName:"", age:20, grades:56}
 * 3- display the object in Terminal
 * 4- store (append) this object to students.json file
 * 5- display all students records from the file
 * 6- kill the process
 */
// rl.question('enter your first name', firstName => {
//   rl.question('enter your last name', lastName => {
//     rl.question('enter your age', age => {
//       rl.question('enter your grade', grade => {
//         // we can complete our code
//       })
//     })
//   });
// })

// call promise using then, catch
// getEntry('enter your first name\n').then(firstName => {
//   getEntry('enter your lastName\n').then(lastName => {
//     console.log(firstName, lastName);
//   }).catch(error => {
//     console.log(error);
//   })
// }).catch(error => {
//   console.log(error);
// })

function getEntry(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (data) => {
      if (data === 'exit') {
        reject('closed by the user');
      } else {
        resolve(data);
      }
    });
  });
}

function save(obj) {
  const jsonText = fs.readFileSync('./students.json', 'utf8');
  let arr;
  if (jsonText.trim() === '') {
    arr = [];
  } else {
    arr = JSON.parse(jsonText);
  }
  // add the obj to arr
  arr.push(obj);
  fs.writeFileSync('students.json', JSON.stringify(arr));
  return arr;
}
async function ask() {
  try {
    const firstName = await getEntry('enter your first name\n');
    const lastName = await getEntry('enter your last name\n');
    // validate age
    let age;
    let ageCounter = 0;
    do {
      if (ageCounter === 5) {
        console.log('maximum tries number has reached ');
        process.exit();
      }
      age = await getEntry('enter your age\n');
      ageCounter++;
    } while (age < 18 || age > 100 || isNaN(age));
    // validate grades
    let grades;
    do {
      grades = await getEntry('enter your grade\n');
    } while (grades < 0 || grades > 100 || isNaN(grades));
    // create an object
    const obj = {
      firstName,
      lastName,
      age,
      grades,
    };
    console.log(obj);
    const allData = save(obj);
    console.log(allData);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

ask();
