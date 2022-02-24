/* const fetchData = (callback) => {
  setTimeout(() => {
    callback('Done');
  }, 1500);
};
setTimeout(() => {
  console.log('Timer is done!');
  fetchData((text) => {
    fetchData((text1) => {
      console.log('theis is the second text : ' + text1);
    });
    console.log('theis is the first text : ' + text);
  });
}, 2000); */

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then((text) => {
      console.log('this is the first text : ' + text);
      return fetchData();
    })
    .then((text1) => {
      console.log('this is the second text : ' + text1);
    });
}, 2000);
