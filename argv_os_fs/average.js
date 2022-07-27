/* function average() {
  //console.log(arguments)
    let average=0;
    let sum=0;
    const passed_values__array = Object.values(arguments);

    for (i = 0; i < passed_values__array.length; i++) {
      sum = sum + Object.values(arguments)[i];
    }

    average = sum / passed_values__array.length;
    console.log(average);

}
 average(5,3,4,3,5); */
 
/* function average1() {
  const values_array = Object.values(arguments);
 let average = values_array.reduce((a, b) => a + b, 0) / values_array.length;
  console.log(average);
}
average1(5, 3, 4, 3, 5);

console.log(process.argv) */
// process.agv ===> [array of all arguments passed on the file


/* let args = process.argv.slice(2);
const average = () =>
  args.reduce((a, b) => Number(a) + Number(b), 0) / args.length;
console.log(average()); */
 
/* let args = process.argv.slice(2);
 function average () {
   return args.reduce((a, b) => Number(a) + Number(b), 0) / args.length;
 }
 console.log(average()); */

/*  let agrs = process.argv.slice(2);

 function average() {
   // arguments ==> object
   // the number of all arguments is
   let argumentsLength = agrs.length;
   // console.log(argumentsLength)
   let sum = 0;
   agrs.forEach((arg) => {
     if (isNaN(Number(arg))) {
       argumentsLength--;
     } else {
       sum += Number(arg);
     }
     //console.log(arguments[key])
   });
   console.log(sum / argumentsLength);
 }
 average(); */

let args = process.argv.slice(2);
console.log((args.reduce((a, b) => Number(a) + Number(b), 0) / args.length).toFixed(2));