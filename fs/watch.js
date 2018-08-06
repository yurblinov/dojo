const fs = require('fs');

const watcher = fs.watch(__dirname, (event, filename) => {
    console.log(`event: ${event}, filename: ${filename}`);
});

watcher.on('error', error => {console.log(error)});