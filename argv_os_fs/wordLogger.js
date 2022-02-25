//this file accept 3 arguments:
//1- the word
//2- ituration (count)
// 3-speed (millisecond)
// 4- setInterval
let args = process.argv.slice(2);
let kill = setInterval(() => console.log(args[0]), Number(args[2])*1000);
setTimeout(() => clearInterval(kill), (Number(args[1])+1) * Number(args[2]*1000));
//process.exit(0)//kill process (nodejs)

/* let args = process.argv.slice(2);
let counter = 0;
const repeat = setInterval(() => {
  console.log(counter, '- ', args[0]);
  counter++;
  if (counter == Number(args[1])) {
    process.exit(0); // kill process (NODEJS) (KILL PROGRAMM)
    //clearInterval(repeat)// javascript
  }
}, Number(args[2])); */