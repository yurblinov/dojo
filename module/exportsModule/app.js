//first variant
/*const db = require('./db');//first variant

const users = db.getUsers();
console.log(users);*/

//Second variant
const users = require('./db');

console.log(users);

//Third variant and Fourth
const db = require('./db');
//const getUsers = require('./db').getUsers;
//const users = require('./db').users;
//const { users, getUsers } = require('./db');//деструктурирующее присваивание ???

const user = new db.User();

console.log(db.users);
