//const EventEmitter = require('events'); //встроенный класс
const EventEmitter = require('./event-emitter'); //мой класс

class Timer extends EventEmitter {
    constructor(total) {
        super();
        this.total = total;
        this.ticks = 0;
    }

    start() {
        this.interval = setInterval(() => this.tick(), 1000);
        this.emit('start');
    }

    tick() {
        this.ticks += 1;

        if (this.ticks <= this.total) {
            this.emit('tick', this.ticks);
        } else {
            this.end();
        }
    }

    end() {
        clearInterval(this.interval);
        this.emit('end');
    }
}

const timer = new Timer(10);

//timer.once('start', () => console.log('Start'));
timer.on('start', () => console.log('Start'));
timer.on('tick', tick => console.log(tick));
//timer.once('end', () => console.log('End'));
timer.on('end', () => console.log('End'));

timer.start();
