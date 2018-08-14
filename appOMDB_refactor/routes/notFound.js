const render =require('../lib/render');

function notFound(req, res) {
    render(res, 'error.html', {error: 'Not found'});
}

module.exports = notFound;