const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('lorem.txt', 'utf-8');
const output = fs.createWriteStream('lorem.md.gz');
const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);


//простая реализация "не рабочая"
class ReadStream {
    pipe(stream) {
        this.on('data', part => stream.write(part));
        return stream;
    }

}