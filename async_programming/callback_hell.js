/*
    콜백지옥..

    한 번에 여러가지를 기다려야 할 때.

*/

const fs = require("fs");

fs.readFile("a.txt", function(err, dataA) {
  if (err) console.error(err);

  fs.readFile("b.txt", function(err, dataB) {
    if (err) console.error(err);

    fs.readFile("c.txt", function(err, dataC) {
      if (err) console.error(err);
      setTimeout(function() {
        fs.readFile("d.txt", function(err) {
          // 예외처리가 안나와요... 이게 바로 콜백지옥인가요??
          if (err) console.error(err);
        });
      }, 60 * 1000);
    });
  });
});
