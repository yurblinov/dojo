const db = require('./db');
const User = require('./user');
/*
module.exports = {
    db,
    User
};
*/

//Third variant
module.exports = {
    get: db.getUsers,
    add: db.addUser,
    User
};