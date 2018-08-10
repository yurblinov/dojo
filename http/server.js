const http = require('http');

const html = `
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Основы Node.js</title>
            <link rel="stylesheet" href="app.css"> 
        </head>
        <body>
            <h1>Основы Node.js</h1>
            <button>Нажми меня</button>

            <script src="app.js"></script>

        </body>
    </html>
`;
const css = `
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1 {
        background-color: #008000;
        color: white;
        padding: 15px;
        font-family: 'Consolas';
    }
`;
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js в действии'));
`;


http.createServer((req, res) => {
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers);

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
            break;
        
        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
            break;

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Не найдено');
    }
    
}).listen(3000, () => console.log('Сервер работает...'));