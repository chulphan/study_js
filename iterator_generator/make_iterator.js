/*
    이터레이터를 직접 만들자.
*/

class Log {
    constructor() {
        this.messages = [];
    }

    add(message) {
        this.messages.push({ message, timestamp: new Date() });
    }

    // next 메소드를 직접 만들자.
    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;

        return {
            next() {
                if(i >= messages.length)
                    return { value: undefined, done: true };
                return { value: messages[i++], done: false };
            }
        }
    }
}

const log = new Log();

log.add('first');
log.add('second');
log.add('third');
log.add('fourth');

for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`)
}