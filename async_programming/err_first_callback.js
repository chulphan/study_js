/*
    오류 우선 콜백 (error-first callback)

    콜백을 사용하면 예외처리가 어려워짐. => 콜백과 관련된 에러를 처리할 방법의 표준이 필요하게 됨.
    
    => 콜백의 첫 번째 매개변수에 에러 객체를 쓰기로 함. 에러가 null 또는 undefined 이면 에러가 없다는 의미.

    오류 우선 콜백을 다룰 때는 에러 매개변수를 체크하고 그에 맞게 반응하게 하는 것을 제일 먼저 생각해야함.
*/

const fs = require("fs");

const fname = "may_or_may_not_exist.txt";

/*
    콜백에서 먼저하는 일은 err가 true인지 확인하는 일. 만약에 err === true이면 파일을 읽는데 문제가 발생했다는 것이고 콘솔에 에러 메세지를 출력한 후 실행을 종료.
*/

fs.readFile(fname, function(err, data) {
  if (err) return console.error(`error reading file ${fname}: ${err.message}`);
  console.log(`${fname} contents: ${data}`);
});
