/*
    비동기적 실행에서 혼란스럽고 에러가 자주 일어나는 부분은 스코프와 클로저가 비동기적으로 실행에 영향을 미치는 부분.
    함수를 호출하면 항상 클로저가 만들어짐.
    매개변수를 포함해 함수 안에서 만든 변수는 모두 무언가가 자신에 접근할 수 있는 한 계속 존재한다.
*/

function countdown() {
  let i;
  console.log("Countdown: ");

  for (i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? "go" : i);
    }, (5 - i) * 1000);
  }
}

countdown();
/*
    예상과는 다르게 -1이 6번 출력됨.

    countdown을 호출하면 변수 i가 들어있는 클로저가 만들어짐.
    for 루프 안에서 만드는 콜백은 모두 i에 접근할 수 있고 모두 똑같은 i에 접근함.
    하지만 여기서, 시간을 계산하는 (5 - i) * 1000 은 예상대로 동작함 => 동기적으로 실행됐기 때문
    => setTimeout을 호출하는 것이 동기적이기 때문이고 그래야만 콜백 호출시점을 계산할 수 있음.
*/

function countdown_async() {
  console.log("coundown_async: ");
  for (let i = 5; i >= 0; i--) {
    // 이제 i는 블록 스코프 변수임.
    setTimeout(function() {
      console.log(i === 0 ? "go_async" : i);
    }, (5 - i) * 1000);
  }
}

countdown_async();

/*
    중요한 점은 콜백이 어느 스코프에서 선언되었느냐임.
    콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근할 수 있다. 따라서 i의 값은 콜백이 실제 실행되는 순간마다 다를 수 있다.
    이 원칙은 콜백 뿐만 아니라 모든 비동기적 테크닉에 적용된다.
*/
