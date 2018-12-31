/*
    getNextRainbowColor 는 7가지 무지개 색을 반환.

    입력이 같아도 결과가 항상 다름.
    colorIndex의 값을 바꾸는 side effect 존재

    => 순수한 함수의 정의를 어김.
*/

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let colorIndex = -1;

function getNextRainbowColor() {
  if (++colorIndex >= colors.length) colorIndex = 0;
  return colors[colorIndex];
}
