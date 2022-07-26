
const arr = [1,2,4,3];
// use reduce as sort
let arr1 = arr.reduce((a,b)=> {
  let assest=0;
  while (assest < a.length && b > a[assest]) assest++;
  a.splice(assest,0,b)
 return a;} ,[] );
// use rduce as filter
let arr1 = arr.reduce(function (a,b) { 
  if (b===2){
    a.push(b);
  }
 return a;} ,[] );
//use reduce as map
let arr1 = arr.reduce(function (a,b) { a.push(b*2);
  return a;} ,[] );