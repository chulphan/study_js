const fs = require("fs");

/*
    아래 함수는 예외처리를 해주었음에도 불구하고 실행을 멈춰버린다.
    왜냐하면 try - catch 구문은 같은 함수 내에 있을때만 동작하기 때문이다.

    보이기에는 try - catch가 하나의 함수 안에 존재하는 것처럼 보이지만, 예외는 콜백함수 내에서 일어났기 때문에 catch 문이 동작하지 않은 것이다.
*/

function readSketchyFile() {
  try {
    fs.readFile("does_not_exist.txt", function(err, data) {
      if (err) throw err;
    });
  } catch (err) {
    console.log("warning: minor issue occurred, program continuing");
  }
}

readSketchyFile();
