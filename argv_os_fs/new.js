const colors = require('colors');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('please enter your first name\n', (firstName) =>
  rl.question('please enter your last name\n', (lastName) => {
    rl.setPrompt('please enter your age must be over 18 and under 100\n');
    rl.prompt();
    rl.on('line', (Age) => {
      if (Number(Age) < 18 || Number(Age) > 100 || isNaN(Age)) {
        rl.prompt();
      } else {
        rl.setPrompt('please enter your grades must be between 0 and 100\n');
        rl.prompt();
        rl.on('line', (grade) => {
          if (Number(grade) < 0 || Number(grade) > 100 || isNaN(grade)) {
            rl.prompt();
          } else {
            const student = {
              firstName: firstName,
              lastName: lastName,
              Age: Age,
              Grades: grade,
            };
            if (fs.existsSync('./student.json')) {
              const stat = fs.statSync('./student.json');
              if (stat.size === 0) {
                fs.writeFile('./student.json', '[]', (err) => {
                  if (err) console.log(err);
                });
              }
            } else if (!fs.existsSync('./student.json')) {
              fs.writeFile('./student.json', '[]', (err) => {
                if (err) console.log(err);
              });
            }
            fs.readFile('./student.json', 'utf8', (err, data) => {
              if (err) throw err;
              let arr = eval(`${data}`);
              //let arr = JSON.parse(data);
              arr.push(student);
              fs.writeFile(
                './student.json',
                JSON.stringify(arr, null, 2),
                (err) => {
                  if (err) throw err;
                  console.log('new student added successfully'.red);
                  console.log(student);
                  fs.readFile('./student.json', 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log(
                      'Students current data is :\n'.rainbow.bold,
                      JSON.parse(data)
                    );
                    process.exit();
                  });
                }
              );
            });
          }
        });
      }
    });
  })
);

/* rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function (line) {
  if (line === 'right') rl.close();
  rl.prompt();
}).on('close', function () {
  process.exit(0);
}); */
