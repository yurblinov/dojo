const url = require('url');

const omdb = require('../lib/omdb');
const render =require('../lib/render');

function search(req, res) {
    //req.url // /search?title=avengers
    const parsedUrl = url.parse(req.url, true);
    const title = parsedUrl.query.title;

    
    omdb.get(title, (error, movie) => {
        if (error) {
            return render(res, 'error.html', {error: error.message});
        }

        render(res, 'movie.html', movie);
    });

}

module.exports = search;