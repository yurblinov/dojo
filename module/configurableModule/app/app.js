const connection = require('./db')('mongodb://...');

console.log(connection.connectionString);

console.log(connection);