// write a code to let user enter his username and password to register:
// #what do you want to do:
// #register
// #enter your username:
// #fbw
// #enter your password:
// 12345678

// the program should save user data in a json file as array of objects
// [
//     {
//         username: 'fbw',
//         password: "[hashed password]"
//     }
// ]

// #your registration is done
const hash = require('./models/passwordManager');
const bcrypt = require('bcrypt');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getEntery(message) {
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
  const usersJsonText = fs.readFileSync('./users.json', 'utf-8');
  let arr;
  if (usersJsonText.trim() === '') {
    arr = [];
  } else {
    arr = JSON.parse(usersJsonText);
  }
  arr.push(obj);
  fs.writeFileSync('./users.json', JSON.stringify(arr, null, 2));
}

async function start() {
  try {
    const what = await getEntery('what do you want to do?\n');
    if (what === 'register') {
      const userName = await getEntery('please enter your user name:\n');
      const passWord = await getEntery('please enter your password:\n');
      const hashedPass = bcrypt.hashSync(passWord, 10, (error, hashedpass) => {
        if (error) {
          console.log(error);
        } else {
          return hashedpass;
        }
      });
      const obj = {
        userName,
        hashedPass,
      };
      console.log(obj);
      console.log(__dirname);
      save(obj);
    } else if (what === 'login') {
      const checkedUserName = await getEntery('please enter your user name:\n');
      const checkedPassWord = await getEntery('please enter your password:\n');
      const usersJsonText = fs.readFileSync('./users.json', 'utf-8');
      let isNameExist = false;
      JSON.parse(usersJsonText).forEach((user) => {
        if (user.userName === checkedUserName) {
          isNameExist = true;
          bcrypt.compare(checkedPassWord, user.hashedPass, (err, result) => {
            if (result === false) {
              console.log('password is wrong');
              process.exit();
            } else {
              console.log('you are logged in');
              process.exit();
            }
          });
        }
      });
      if (isNameExist === false) {
        console.log('user name is not exist');
        process.exit();
      }
      //JSON.parse(usersJsonText);
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
start();
