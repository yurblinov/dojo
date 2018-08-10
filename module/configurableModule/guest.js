/*const getGreet = require('./greet');

const greet = getGreet('Hello');

console.log(greet('Oleg'));*/

//other syntax
const greet = require('./greet')('Hello');

console.log(greet('Oleg'));