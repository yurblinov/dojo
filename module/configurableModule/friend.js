/*const getGreet = require('./greet');

const greet = getGreet('Hi');

console.log(greet('Oleg'));
console.log(greet('Vera'));
console.log(greet('Kostj'));*/


//other syntax
const greet = require('./greet')('Hi');

console.log(greet('Oleg'));
console.log(greet('Vera'));
console.log(greet('Kostj'));