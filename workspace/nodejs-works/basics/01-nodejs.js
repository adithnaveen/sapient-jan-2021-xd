const maths = require('./service'); 

const factorial = require("./my-utils").factorial;
const fibonacci = require("./my-utils").fibonacci;

console.log("HI i'm from node");
console.log(maths.sum(10,20));

//////////////////////////////////////

console.log(factorial(5));
console.log(fibonacci(10));