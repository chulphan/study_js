/*
    아래 코드는 -1만 출력함.
    왜냐하면 setTimeout에 전달된 함수가 루프 안에서 실행되지 않고 
    루프가 종료된 뒤에 실행됐기 때문. 따라서 루프의 i는 5에서 시작해서 -1로 끝나고 -1이 되기 전에는 콜백함수는 호출되지 않는다.
*/
var i;
for (i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}

/*
    위의 문제를 해결하기 위해서 클로져를 이용.
    함수를 하나 더 사용하면 새로운 스코프가 만들어지고 각 단계에서 i의 값이 클로저에 '캡처'된다..
*/

function loopBody(j) {
  setTimeout(function() {
    console.log(j === 0 ? "go!" : i);
  }, (5 - j) * 1000);
}

var j;
for (j = 5; j >= 0; j--) {
  loopBody(j);
}

/*
    IIFE를 사용.
*/

var k;
for (k = 5; k >= 0; k--) {
  (function(k) {
    setTimeout(function() {
      console.log(k === 0 ? "go" : k);
    }, (5 - k) * 1000);
  })(k);
}
