const http = require('http');

http.createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {

    } else if (req.url === '/') {

    } else if (req.url.startsWith('/search)')) {

    } else {

    }
}).listen(3000, () => console.log('Server work'));