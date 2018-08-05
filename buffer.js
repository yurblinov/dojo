// const buffer = Buffer.from('Node.js');
// console.log(buffer); //<Buffer 4e 6f 64 65 2e 6a 73>
// console.log(buffer.toString());//Node.js

//const buffer = Buffer.from('Node.js', 'utf-8');
//console.log(buffer.toString());//Node.js

//const buffer2 = Buffer.from('Ноуд.жс', 'ascii');
//console.log(buffer2.toString());//>C4.6A

//const buffer2 = Buffer.from('Ноуд.жс', 'utf-8');
//console.log(buffer2.toString());//Ноуд.жс

const buffer = Buffer.from('Node.js');
console.log(buffer.toJSON());//{ type: 'Buffer', data: [ 78, 111, 100, 101, 46, 106, 115 ] }
console.log(buffer[0]);//78
console.log(buffer.toString());//Node.js
buffer[0] = 77;
console.log(buffer.toString());//Mode.js
buffer.write('N');
console.log(buffer.toString());//Node.js

 

