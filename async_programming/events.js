/*
    이벤트(Events)
    이벤트가 일어나면 이벤트 발생을 담당하는 개체(emitter) 에서 이벤트가 일어났음을 알림.
    필요한 이벤트는 모두 주시(listen)할 수 있다.

    이벤트를 주시하는 방법? => 콜백!
    노드에는 이벤트를 지원하는 모듈인 EventEmitter가 내장되어 있다.

    EventEmitter는 클래스와 함께 사용하도록 설계되어있다.
*/

const EventEmitter = require("events").EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }

  go() {
    const countdown = this; // this는 콜백 안에서 값이 달라지기 때문에 계속 활용하기 위해서 먼저 할당해준다.
    return new Promise(function(resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        setTimeout(function() {
          if (countdown.superstitious && i === 13) {
            return reject(new Error("ERRORRRRRRRR"));
          }
          countdown.emit("tick", i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000);
      }
    });
  }
}

const c = new Countdown(5);

c.on("tick", function(i) {
  if (i > 0) console.log(i + "...");
});

c.go()
  .then(function() {
    console.log("GO");
  })
  .catch(function(err) {
    console.error(err.message);
  });
