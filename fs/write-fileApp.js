const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');
const content = getValue('-c');

fs.appendFile(filename, content, error => {
    if (error) throw error;

    console.log('File created');
});