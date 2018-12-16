/*
    filter 메소드
    
    배열에서 필요한 것들만 남길 목적으로 만들어 짐.
    사본을 반환하며 새 배열에는 필요한 요소들만 남게 됨.
    어떤 요소를 남길지 판단할 함수를 매개변수로 넘김.

*/

const cards = [];

for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; value++) 
        cards.push({ suit, value }); // suit: suit, value: value

console.log(cards);

// value가 2인 카드
cards.filter(c => c.value === 2); 
// [ { suit: 'H', value: 2 },
//   { suit: 'C', value: 2 },
//   { suit: 'D', value: 2 },
//   { suit: 'S', value: 2 } ]

// 다이아몬드인 카드
console.log(cards.filter(c => c.suit === "D"));

// 킹, 퀸, 주니어인 카드
console.log(cards.filter(c => c.value > 10));

// 하트의 킹, 퀸, 주니어
console.log(cards.filter(c => c.suit === "H" && c.value > 10));