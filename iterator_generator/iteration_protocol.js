/*
    이터레이터 프로토콜은 모든 객체를 이터러블 객체로 바꿀 수 있다.

    메세지에 타임스탬프를 붙이는 로그 클래스를 생성.
*/

// class Log {
//     constructor() {
//         this.messages = [];
//     }

//     add(message) {
//         this.messages.push({ message, timestamp: new Date() });
//     }
// }

 /*

    로그를 기록한 항목을 순회하고 싶다면?
    log.messasges 에 직접적으로 접근할 수 있지만
    log를 배열 조작하듯 할 수 있다면 더 좋을듯...(??) => 클래스 자체를 배열로 조작하자는건가??

    이터레이션 프로토콜은 클래스에 심볼 메소드 Symbol.iterator가 있고 이 메소드가 이터레이터 처럼 동작하는 객체,
    즉 value와 done 프로퍼티가 있는 객체를 반환하는 next 메소드를 가진 객체를 반환한다면
    그 클래스의 인스턴스는 이터러블 객체라는 뜻.

 */

class Log {
    constructor() {
        this.messages = [];
    }

    add(message) {
        this.messages.push({ message, timestamp: new Date() });
    }

    [Symbol.iterator]() {
        console.log(Symbol.iterator)
        console.log(this.messages.values())
        return this.messages.values();
    }
}

const log = new Log();
log.add('first day at sea');
log.add('spotted whale');
log.add('spotted another vessel');

for (let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}