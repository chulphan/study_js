/*
    promise 는 비동기적인 ㅋ ㅗ드를 단순화하고 콜백이 두 번 이상 실행되는 문제를 방지.
    하지만 resolve 나 reject 호출을 잊어서 promise가 결정되지 않는 문제가 생길 수도 있다.

    이러한 문제를 방지하기 위한 방법 중 하나는 Promise에 타임아웃을 걸어버리는 것.
    충분한 시간이 지나도 상태가 결정되지 않으면 자동으로 실패하게 만들어버리는 것.

    얼마나 기다려야 '충분히' 기다린건지는 개발자 몫

*/

// 아래 코드는 reject 에 대한 처리를 해주지 않아서 문제가 발생해도 어떤 문제가 발생했는지 알 수가 없다.
function launch() {
  return new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) return;
    console.log("Lift Off");
    setTimeout(function() {
      resolve("In orbit");
    }, 2 * 1000);
  });
}

launch();

// 위의 코드의 문제를 해결하기 위해서..

const Countdown = require("./more_eventemitter");

function addTimeout(fn, timeout) {
  if (timeout === undefined) timeout = 1000; // default timeout.

  return function(...args) {
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(reject, timeout, new Error("promise timed out"));
      fn(...args)
        .then(function(...args) {
          clearTimeout(tid);
          resolve(...args);
        })
        .catch(function(...args) {
          clearTimeout(tid);
          reject(...args);
        });
    });
  };
}

const countdown = new Countdown(10);

countdown
  .go()
  .then(addTimeout(launch, 11 * 1000))
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err.message);
  });
