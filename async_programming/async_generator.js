/*
    제너레이터는 함수와 호출자 사이의 양방향 통신을 가능하게 함.
    원래 제너레이터는 동기적이지만, promise와 결합하면 비동기 코드를 효율적으로 관리할 수 있다.

    비동기 코드에서 가장 어려운 점은 동기적인 코드에 비해서 만들기가 어려움.
    왜냐하면 우리는 어려운 문제를 해결해야할 때 동기적으로 생각하기 때문.

    하지만 동기적으로 코드를 짜면 성능에 문제가 생김.
    비동기 코드의 어려움을 해결하고 성능 개선만 누릴 수 있다면...?

    => 제너레이터를 통해 일정부분 해결이 가능함.
*/

/*
    EX)
    파일 세 개를 읽고 1분간 기다린 다음 그 내용을 합쳐서 4번째 파일에 쓰는 문제
    
    dataA = read contents of 'a.txt'
    dataB = read contents of 'b.txt'
    dataC = read contents of 'c.txt'
    wait 60 seconds
    write dataA + dataB + dataC to 'd.txt'

    위와 같은 방식으로 해결하려고 함.

    제너레이터를 사용하면 위와 같이 일반적인 발상과 동기적인 코드를 비동기적으로 해결할 수 있음
*/

/*
    Step1. 노드의 오류 우선 콜백을 Promise로 바꾸는 것.
*/

const fs = require("fs");

function node_function_call(f, ...args) {
  return new Promise(function(resolve, reject) {
    f.call(null, ...args, function(err, ...args) {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    });
  });
}

/*
    Step2. 콜백을 받는 노드 스타일 메서드를 모두 Promise로 바꿀 수 있다.
    setTimeout을 써야하는데, setTimeout은 노드보다 먼저 나왔고 오류 우선 콜백 패턴을 따르지 않음
    => 같은 기능을 가진 promise_timeout 함수를 생성.
*/

function promise_timeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}

/*
    Step3. 제너레이터 실행기
    제너레이터는 원래 동기적. 하지만 제너레이터는 호출자와 통신할 수 있ㅇ트므로 제너레이터와의 통신을 관리하고
    비동기적 호출을 처리하는 함수를 만들 수 있다.
*/

function generator_run(g) {
  const it = g();

  (function iterate(val) {
    const x = it.next(val);

    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate, 0, x.value);
      }
    }
  })();
}

/*
    generator_run: 기초적인 제너레이터 재귀 실행기.

    위 함수에 제너레이터 함수를 넘기면 해당 함수가 실행됨.
    yield로 값을 넘긴 제너레이터는 이터레이터에서 next를 호출할 때까지 기다림.
    위 함수는 그 과정을 재귀적으로 반복함.
    이터레이터에서 Promise를 반환하면 Promise가 완료될 때까지 기다린 다음 이터레이터 실행을 재개함.
    generator_run 에서 iterate를 바로 호출하지 않고 setTimeout을 거친 이유는 효율성 때문.
    자바스크립트 엔진은 재귀 호출을 비동기적으로 실행할 때 메모리를 좀 더 빨리 회수함.
*/

function* theFutureIsNow() {
  const dataA = yield node_function_call(fs.readFile, "a.txt");
  const dataB = yield node_function_call(fs.readFile, "b.txt");
  const dataC = yield node_function_call(fs.readFile, "c.txt");

  yield promise_timeout(60 * 1000);

  yield node_function_call(fs.writeFile, "d.txt", dataA + dataB + dataC);
}

generator_run(theFutureIsNow);
