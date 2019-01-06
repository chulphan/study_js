/*
    Promise를 체인으로 연결할 수 있다.
    즉, Promise가 완료되면 다른 Promise를 반환하는 함수를 즉시 호출할 수 있다.
*/

const Countdown = require("./more_eventemitter");

function launch() {
  return new Promise(function(resolve, reject) {
    console.log("Lift off");
    setTimeout(function() {
      resolve("In orbit");
    }, 2 * 1000);
  });
}

const c = new Countdown(15, true).on("tick", i => console.log(i + "...."));

c.go()
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error(".....ERRRRORRR");
  });
