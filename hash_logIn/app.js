const { toLocal, getCurrentDate } = require('./models/date');
const { email, emailPass, sqlUser } = require('./models/config.js');
const { hash, checkPassword } = require('./models/passwordManager');
console.log(getCurrentDate());
console.log(toLocal());

console.log(email, emailPass, sqlUser);

hash('12345678')
  .then((hashedPass) => {
    console.log(hashedPass);
  })
  .catch((error) => {
    console.log(error);
  });

checkPassword(
  '12345678',
  '$2b$10$Bet.RP2KdKGVXGluB0.mn.cEWvF/owr.tp0vYyR6tAaCOsJY5KHr.'
)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
