// start java script cosding here 
console.log('!--------setTimeout and setInterval ?-------!');
/* function printNumbers(from, to) {
  let end = from;
  let Id = setInterval(
    () => (end <= to ? (console.log(end), end++) : clearInterval(Id)),
    1000
  );
}
printNumbers(5, 10); */

/* function printNumbers(from, to) {
  let end = from;
  setTimeout(function go () {
    console.log(end);
    end++
    if (end <= to)
    setTimeout(go, 1000); 
  }, 1000);
}
printNumbers(5, 10); */

/* for(let i=1; i<6; i++){
  setTimeout(function(){
  console.log(i);
  },1000)
  }

let i = 0;
setTimeout(() => console.log(i), 1000);
for(let j = 0; j < 5; j++) {
  i++;
} */


/* // repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000); */