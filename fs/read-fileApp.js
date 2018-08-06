const fs = require('fs');

console.log(process.argv); //[ '/usr/local/bin/node','/home/DN180282BJS/NodeJS/dojo/fs/read-fileApp.js','-f','node.md' ]

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');

fs.readFile(filename, 'utf-8', (error, data) => {
    if (error) return console.log('Такого файла нет');

    console.log(data);
});
