let x = 2 + "2";

console.log(x);
////
let y = 2 + 2 + "2";
/////
console.log(y);
/////
let z = 2 + true;

console.log(z);
/////
let q = 2 + true +"2";

console.log(q);
////

let m = Number("2");

console.log(m);
/////

let k = Number("hello");

console.log(typeof(k));
////
let r = Boolean(5);

console.log(r);
//// FOR BOOLEAN ALL NON ZERO VALUES ARE TRUE

let o = Boolean("hello");

console.log(o);
////// empty strings are false

let p = "";

if (p){

}
/////

if ([]){

}
//// OBJECTS ARE ALWAYS TRUE WHEN CONVERTING TO BOOLEAN 