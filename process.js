// console.log(process.execPath);///usr/bin/node
// console.log(process.version);//v9.11.2
// console.log(process.platform);//linux
console.log(process.argv);// [ '/usr/bin/node','/home/frontend/node/dojo/process']

const message = process.argv[1];
console.log(message); //'/home/frontend/node/dojo/process'