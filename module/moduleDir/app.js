//First variant
/*
const db = require('./db').db;
const User = require('./db').User;
*/

//Second variant
/*
const { db, User } = require('./db');
*/

//Third variant
const {get, add, User} = require('./db');
require('./config');

//const users = db.getUsers();
const users = get();//Third variant
const user = new User('Bruce', 'Wayne');

console.log(users);

//db.addUser(user);
add(user);//Third variant
console.log(users);
