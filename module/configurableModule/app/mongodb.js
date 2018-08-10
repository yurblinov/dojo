// module.exports = {
//     connect: connectionString => ({ connectionString })
// };

module.exports = {
    connect: function(connectionString) {
            return ({ connectionString });
    }
};