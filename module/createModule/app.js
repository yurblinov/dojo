const db = require('./db');

//console.log(db.users);

const users = db.getUsers();
console.log(users);