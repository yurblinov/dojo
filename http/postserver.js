const http = require('http');
const fs = require('fs');
const path = require('path');

function parseBody(body) {
    //username=yurblinov&password=123456
    const result = {};
    const keyValuePairs = body.split('&'); //['username=yurblinov', 'password=123456']

    keyValuePairs.forEach(keyValue => {
        const [key, value] = keyValue.split('='); //['username', 'yurblinov']
        result[key] = value;
    });
    return result;
}

http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            const stream = fs.createReadStream(path.join(__dirname, 'public', 'form.html'));
            res.writeHead(200, { 'Content-Type': 'text/html'});
            stream.pipe(res);
            break;

        case 'POST':
            let body = '';

            req.setEncoding('utf-8');
            req.on('data', data => body += data);
            req.on('end', () => {
                const data = parseBody(body);

                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(data));
            });

            break;
    }

}).listen(3000, () => console.log('Server start'));
