/*
    promise_ex.js 에서 reject 를 추가해보자.
*/

function countdown_with_reject(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i === 13) return reject(new Error("ERRORRRRRR")); // 에러가 발생해도 계속 진행된다..
        if (i > 0) console.log(i + "...");
        else resolve(console.log("Go"));
      }, (seconds - i) * 1000);
    }
  });
}

countdown_with_reject(20);
