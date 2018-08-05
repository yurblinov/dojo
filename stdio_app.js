const stdin = process.stdin;
const stdout = process.stdout;

stdin.write('Привет! Как тебя зовут? ');

stdin.on('data', input => {
    const name = input.toString().trim();
    const reversedName = name.split('').reverse().join('');
    stdout.write(`\n${name} твое имя наоборот: ${reversedName}`);
    process.exit();
});

process.on('exit', () => {
    stdout.write('\n\nУдачи в изучении NodeJS!\n');
});