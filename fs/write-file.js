const fs = require('fs');
//создать файл
fs.writeFile('node.txt', 'Hello node.js', error => {
    if (error) throw error;

    console.log('File created');
});
//дополнить файл содержанием
fs.appendFile('node.txt', '!!!', error => {
    if(error) throw error;

    console.log('File added');
});