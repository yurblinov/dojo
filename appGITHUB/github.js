const https = require('https');

function getRepos(username, done) {
    if(!username) return done(new Error('Необходима указать имя пользователя'));

    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: {'User-Agent' : `${username}`} 
    };

    const req = https.get(options, res => {
        //console.log(res.statusCode, res.statusMessage);//отправка запроса (проверка)
        res.setEncoding('utf-8');

        if (res.statusCode === 200) {
            let body = "";

            res.on('data', data => body += data);

            res.on('end', () => {
                try {
                    const result = JSON.parse(body);
                    done(null, result);
                } catch (error) {
                    done(new Error(`Не удалось обработать данные (${error.message})`));
                }
            });
        } else {
            done(new Error(`Не удалось получить данные от сервера (${res.statusCode} ${res.statusMessage})`));
        }
    });

    req.on('error', error => done(new Error(`Не удалось отправить запрос (${error.message}`)) );//проверка в методе get: https://codedojo1.ru
}

module.exports = {
    getRepos
};