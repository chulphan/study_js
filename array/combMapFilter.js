const cards = [];

for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; value++) 
        cards.push({ suit, value }); // suit: suit, value: value

function cardToString(c) {
    const suits = { 
        'H': '\u2665', 
        'C': '\u2663', 
        'D': '\u2666', 
        'S': '\u2660' 
    };

    const values = {
        1: 'A',
        11: 'J',
        12: 'Q',
        13: 'K'
    }

    // cardToString을 호출할 때마다 매번 값을 만드는건 비효율적.
    // 더 효율적인 방법은 연습문제로....;;
    // 어떻게 해야 효율적인거지...??
    for (let i = 2; i <= 10; i++) values[i] = i;
    
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c => c.value === 2).map(cardToString));

console.log(cards.filter(c => c.value > 10 && c.suit === "H").map(cardToString));