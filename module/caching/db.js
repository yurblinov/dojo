console.log('db.js');

const users = require('./users');

function getUsers() {
    return users;
}

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

/*module.exports = {
    User,
    users,
    getUsers
};*/

module.exports = User;