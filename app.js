var number1 = 555;
var number2 = 666;
var math_functions = require('./module/mathlib.js')(number1,number2);

console.log(math_functions.add(2,3));
console.log(math_functions.multiply(2,3));
console.log(math_functions.square(2));
