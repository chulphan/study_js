const words = [
    "Beachball",
    "Rodeo",
    "Angel",
    "Aardvark",
    "Xylophone",
    "November",
    "Chocolate",
    "Papaya",
    "Uniform",
    "Joker",
    "Clover",
    "Bali"
];

// filter와 join을 써서 같은 결과를 만드는 것도 연습문제..
const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
console.log(longWords);