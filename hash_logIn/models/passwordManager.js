const bcrypt = require('bcrypt');

function hash(orginalPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(orginalPassword, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

/**
 * check if password is right
 * @param {String} originalPass the original entered pass
 * @param {String} hash the hashed password from the database
 * @returns promise with true or false vale
 */
const checkPassword = (originalPass, hash) => {
  return new Promise ((resolve, reject) => {
      bcrypt.compare(originalPass, hash,(err, result) => {
          if(err) {
              reject(err)
          } else {
              resolve(result)
          }
      })
  })
  /* return bcrypt.compare(originalPass, hash, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  }); */
};

module.exports = {
  hash,
  checkPassword,
};
