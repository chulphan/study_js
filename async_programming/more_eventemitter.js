const EventEmitter = require("events").EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];

    return new Promise(function(resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        // 이제 조건을 만족하면 에러를 발생시키고 카운트를 더 이상 하지 않는다.
        timeoutIds.push(
          setTimeout(function() {
            if (countdown.superstitious && i === 13) {
              timeoutIds.forEach(clearTimeout);
              return reject(new Error("ERRrOOORRR"));
            }
            countdown.emit("tick", i);
            if (i === 0) resolve();
          }, (countdown.seconds - i) * 1000)
        );
      }
    });
  }
}

// const c = new Countdown(15, true);

// c.on("tick", function(i) {
//   console.log(i + "...");
// });

// c.go()
//   .then(() => {
//     console.log("GO");
//   })
//   .then(err => {
//     console.error(err.message);
//   });

module.exports = Countdown;
