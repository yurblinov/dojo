/*module.exports = function(greeting) {
    return function(name) {
        return `${greeting}, ${name}`;
    };
};*/

//other syntax
module.exports = greeting => name => `${greeting}, ${name}`;