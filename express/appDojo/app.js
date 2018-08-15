const express = require('express');
const morgan = require('morgan');
const todos = require('./todos');

const app = express();

// app.use((req, res, next) => {
//     let date = new Date(Date.now());

//     console.log(`${date} - ${req.method} - ${req.url}`);

//     next();
// });

//app.use(morgan('dev'));
app.use(morgan('combined'));


app.use(express.static(__dirname + '/public')); //download static file -> index.html and style.css

app.get('/', (req, res) => {
    //res.send('<h1>Express<h1>');
    //res.send({ title: 'Express' });
    res.send('Express Todo');
});

app.get('/todos', (req, res) => {
    if (req.query.completed) {
        return res.json(todos.filter(todo => todo.completed.toString() == req.query.completed));
    }

    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    //console.log(req.params);//http://127.0.0.1:3000/todos/1 -> {id: '1'}

    let todo = todos.find(todo => todo.id == req.params.id);

    if(!todo) return res.status(404).send('Not found');

    res.json(todo);
});

app.listen(3000, () => console.log('Server work'));