const stdin = process.stdin;
const stdout = process.stdout;

stdout.write("Hello NODE JS\n");

stdin.on('data', data => stdout.write(data));