const os = require('os');
const fs = require('fs');
// to make terminal as in\output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/* rl.question('please enter your first name:\n', (firstName) =>
  rl.question('please enter your lastName\n', (lastName) => {
    console.log(`you are welcome ${firstName} ${lastName}`);
    process.exit();
  })
); */
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
rl.question('please enter your first name\n', (firstName) =>
  rl.question('please enter your last name\n', (lastName) => {
    rl.question('please enter your age\n', (Age) => {
      if (Number(Age) < 18 || Number(Age) > 100) {
        console.log('the age must be between 8 and 100');
        rl.close();
        //process.exit();
      } else {
        rl.question('please enter your grades\n', (grade) => {
          if (Number(grade) < 0 || Number(grade) > 100) {
            console.log('Grades must be between 0 and 100');
            process.exit();
          } else {
            const student = {
              firstName: firstName,
              lastName: lastName,
              Age: Age,
              Grades: grade,
            };
            console.log(student);
            fs.appendFile(
              './student.json',
              JSON.stringify(student, null, 2),
              (error) => {
                if (error) throw error;
                console.log('student created successfuly');
              }
            );
            fs.readFile('./student.json', (error, data) => {
              if (error) throw error;
              console.log(data.toString());
              process.exit();
            });
          }
        });
      }
    });
  })
);
