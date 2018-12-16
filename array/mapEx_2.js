/*
    map with callback ftn.
    콜백함수는 각 요소에서 호출될 때 요소 자체와 요소 인덱스,
    배열 전체를 매개변수로 받는다.
*/

// 두 배열에 상품과 가격이 따로 저장 되어 있는 것을 객체로 결합하는 예제.

const items = ["Widget", "Gadget"];
const prices = [9.95, 22.25];

// 객체를 괄호로 감싼 이유는 화살표 표기법에서 객체 리터럴의 중괄호를 블록으로 판단하기 때문.
const cart = items.map((x, i) => ({ name: x, price: prices[i]}));

console.log('combinated card: ', cart);