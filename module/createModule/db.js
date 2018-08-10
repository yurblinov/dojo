console.log('db.js');

//const users = ['Alex', 'Bob', 'Charlie'];
//module.exports.users = users;

const users = require('./user');
function getUsers() {
    return users;
}
module.exports.getUsers = getUsers;