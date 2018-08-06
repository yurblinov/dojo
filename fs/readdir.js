const fs = require('fs');

/*Sync - 
Reading directory
[ 'readdir.js' ]
Finished reading*/

// console.log('Reading directory');
// const contents = fs.readdirSync(__dirname);
// console.log(contents);
// console.log('Finished reading');

/*Async*/

console.log('Reading directory');
fs.readdir(__dirname, (error, contentents) => {
    if (error) throw error;

    console.log(contentents);
});
console.log('Finished reading');
