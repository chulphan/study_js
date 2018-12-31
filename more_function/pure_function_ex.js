// const getNextRainbowIterator = (function() {
//   const colors = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet"
//   ];

//   let colorIndex = -1;

//   // return function() {
//   //     if(++colorIndex >= colors.length) colorIndex = 0;
//   //     return colors[colorIndex];
//   // }
//   return {
//     next() {
//       if (++colorIndex >= colors.length) colorIndex = 0;
//       return { value: colors[colorIndex], done: false };
//     }
//   };
// })();

/*
    아래와 같이 함수를 정의하면..
    colorIndex 는 영향을 받지 않음.
    이 함수를 다른 프로그램에서 호출한다고 해서 이 함수는 영향을 받지 않는다.
    next() 는 메소드이므로 동작은 해당 객체에 의해서 좌우됨.
    다른 부분에서 이 함수를 호출하더라도 독립적인 이터레이터가 생성되므로 다른 이터레이터를 간섭하지 않는다
    (각 이터레이터는 독립적이니까.)
*/
function getNextRainbowIterator() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];

  let colorIndex = -1;

  return {
    next() {
      if (++colorIndex >= colors.length) colorIndex = 0;
      return { value: colors[colorIndex], done: false };
    }
  };
}

const rainbowIterator = getNextRainbowIterator();

setInterval(function() {
  console.log(rainbowIterator.next().value);
}, 500);
