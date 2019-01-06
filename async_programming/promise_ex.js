/*
    callback_hell_2.js 의 경우, 콜백이 우연히  두 번 호출이 되는 경우, 아예 호출되지 않는 경우를 방지하는 안전장치가 없다.
    자바스크립트는 콜백이 정확히 한 번만 호출되는 것을 보장하지 않는다(??)

    비동기적 코드가 늘어갈수록 버그가 없고 관리하기 쉬운 코드를 작성하기는 매우 어려워짐.

    ==>> 이를 방지하기 위해서 Promise 가 등장함.
*/

/*
    Promise는 콜백의 단점을 해결하려는 시도로 만들어짐.
    번거롭게 느껴질 수도 있겠지만 일반적으로 안전하고 관리하기 쉬운 코드를 만들 수 있게 됨.

    Promise가 콜백을 대체하는 것이 아니며 실제로 Promise도 콜백을 사용함.

    Promise의 기본개념
    * Promise 기반 비동기적 함수를 호출하면 그 함수는 Promise 인스턴스를 반환.
    * Promise는 성공(fulfilled) 또는 실패(rejected) 두 가지의 상태만을 가진다.
    * 성공한 Promise 가 실패가 되는 일은 없다.(vice versa)
    * 상태가 정해진 Promise는 '결정됐다(settled)' 라고 함.
    
    Promise 또한 객체이므로 어디든 전달 할 수 있다. 비동기적 처리를 다른 곳에서 하고 싶다면 Promise를 넘겨주기만 하면 된다.

    마치 음식점에서 받은 예약 호출기를 친구에게 맡기는 것과 비슷함. 인원만 때맞춰 온다면 누가 호출기를 들고 있든지 상관이 없으니까.
*/

function countdown_promise(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i > 0) console.log(i + "...");
        else resolve(console.log("Go"));
      }, (seconds - i) * 1000);
    }
  });
}

console.log(countdown_promise(10));
