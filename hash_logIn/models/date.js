function getCurrentDate() {
  return Date.now();
}

function toLocal() {
  return new Date(getCurrentDate()).toLocaleDateString(); // 2/25/2022, 7:15:57 PM
  //return new Date(getCurrentDate()).toLocaleString(); // 2/25/2022, 7:15:57 PM
}

module.exports = { getCurrentDate, toLocal };
