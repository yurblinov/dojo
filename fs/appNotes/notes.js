const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (command) {
    case 'list':
        list((error,notes) => {
            if (error) return console.error(error.message);

            notes.forEach((note, index) => console.log(`${index + 1}.${note.title}`));
        });
        break;
    
    case 'view':
        view(title, (error, notes) => {
            if (error) return console.error(error.message);

            console.log(`# ${notes.title}\n\n---\n\n${notes.content}`);
        });
        break;

    case 'creat':
        creat();
        break;

    case 'remove':
        remove();
        break;

    default:
        console.log('Неизвестная команда');
}


function list(done) {
    fs.readFile('notes.json', (error, data) => {
        if (error) return done(error);

        const notes = JSON.parse(data);
        done(null, notes);            
    });
}

function view(title, done) {
    fs.readFile('notes.json', (error, data) => {
        if (error) return done(error);

        const notes = JSON.parse(data);
        const note = notes.find(note => note.title === title);

        if (!note) return done(new Error('Заметка не найдена'));

        done(null, notes);
    });
}
