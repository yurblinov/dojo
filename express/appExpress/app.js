const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('<h1>Express<h1>');
    res.send({ title: 'Express' });
});

app.listen(3000, () => console.log('Server work'));