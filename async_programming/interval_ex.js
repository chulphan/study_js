/*
    setInterval 함수는 콜백을 정해진 주기마다 호출하며 clearInterval을 사용할 때까지 멈추지 않는다.
    setInterval은 고유의 id를 반환한다.

    setInterval과 clearInterval을 브라우저에서는 window, 노드에서는 global 전역객체에 정의되어있다.
*/

const start = new Date();

let i = 0;

const intervalId = setInterval(function() {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10) {
    return clearInterval(intervalId);
  }
  console.log(`${i}: ${now}`);
}, 5 * 1000);
