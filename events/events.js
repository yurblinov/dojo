const EventEmitter = require('events');

const emitter = new EventEmitter();
/*
emitter.on('start', () => console.log('Start'));//Start
emitter.emit('start');
*/
/*
emitter.on('start', (message) => console.log(message));//Started
emitter.on('start', (message) => console.log(message));//Started
emitter.on('start', (message) => console.log(message));//Started
emitter.emit('start', 'Started');
*/

/*
emitter.on('start', (message) => console.log(message));//Started1\nStarted2\nStarted3
emitter.emit('start', 'Started1');
emitter.emit('start', 'Started2');
emitter.emit('start', 'Started3');
*/
/*
emitter.once('start', (message) => console.log(message));//Started1
emitter.emit('start', 'Started1');
emitter.emit('start', 'Started2');
emitter.emit('start', 'Started3');
*/
emitter.on('start', (message) => console.log(message));//Started1
emitter.emit('start', 'Started1');
emitter.removeAllListeners();
emitter.emit('start', 'Started2');
