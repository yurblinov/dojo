//First variant
/*console.log('db.js');

const users = require('./user');

function getUsers() {
    return users;
}
module.exports.getUsers = getUsers;
console.log(module);*/

//Second variant
/*console.log('db.js');

const users = require('./user.json');
function getUsers() {
    return users;
}

module.exports = users;

console.log(module.exports);*/

//Third variant

console.log('db.js');

const users = require('./user.json');

function getUsers() {
    return users;
}

//в качестве ообьекта для module.exports можем указать обьект и указать для него сваойства
module.exports = {
    users,
    getUsers 
}

//только так экспортировать, потому что, exports = module.exports
exports.getUsers = getUsers;

//Fourth variant with Class
console.log('db.js');

const users = require('./user.json');

function getUsers() {
    return users;
}

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

module.exports = {
    users,
    getUsers,
    User
}