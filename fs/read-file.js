const fs = require('fs');

fs.readFile('node.md', 'utf-8', (error, data) => {
    if (error) throw error;
    
    //console.log(data.toString());//# Node.js
    //second param 'utf-8'
    console.log(data);//# Node.js
});