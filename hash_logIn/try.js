const { log } = require('console');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bcrypt = require('bcrypt');


const getEntery = (message) => {
  return new Promise((resolve, reject) => {
    rl.question(message, (data) => {
      if (data === 'exit') {
        reject('closed by the user');
      } else {
        resolve(data);
      }
    });
  });
};

const passBcrypt = (pass) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, 10, (error, hashedPass) => {
      if (error) {
        reject(error);
      } else {
        resolve(hashedPass);
      }
    });
  });
};
const save = (obj, FileName) => {
  if (!fs.existsSync(FileName)) {
    fs.writeFileSync(FileName, '', (error) => {
      if (error) {
        log('could not creat the file for this', error);
        process.exit(1);
      }
    });
  }
  const jsonText = fs.readFileSync(FileName, 'utf8', (error, data) => {
    if (error) throw error;
    return data;
  });
  let arrOfUsers;
  if (jsonText.trim() === '') {
    arrOfUsers = [];
  } else {
    arrOfUsers = JSON.parse(jsonText);
  }
  arrOfUsers.push(obj);
  fs.writeFileSync(FileName, JSON.stringify(arrOfUsers, null, 2), (error) => {
    if (error) {
      log('could not creat the file for this', error);
      process.exit(1);
    }
  });
  log('Registration Done');
};

const register = async () => {
  try {
    const userName = await getEntery('Pease enter your Username\n');
    const PassWord = await getEntery('Please Enter your password\n');
    const hashedPass = await passBcrypt(PassWord);
    const UserData = {
      userName,
      hashedPass,
    };
    save(UserData, 'try.json');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

register();
