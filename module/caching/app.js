//require('./db');//db.js

const User1 = require('./db');
const User2 = require('./db');

const user1 = new User1('Bill', 'Gates');
const user2 = new User2('Steve', 'Jobs');

console.log(user1, user2);
/*result:
db.js
User { firstname: 'Bill', lastname: 'Gates' } User { firstname: 'Steve', lastname: 'Job
s' }*/
console.log(User1 === User2);//true