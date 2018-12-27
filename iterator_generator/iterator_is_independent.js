const books = [
    `Twinkle, twinkle, little bat!`,
    `How I wonder what you're at!`,
    `Up above the wordl you fly,`,
    `Like a tea tray in the sky.`,
    `Twinkle, twinkle, little bat!`,
    `Hwo I wonder what you're at!`
]

const it_1 = books.values();
const it_2 = books.values();

// 어떤 이터레이터도 시작하지 않았음.

it_1.next();
it_1.next(); // How I wonder what you're at!

const val_it_2 = it_2.next(); // Twinkle, twinkle,,,,,

const val_it_1 = it_1.next(); // Up above the world you fly

console.log(val_it_1.value);
console.log(val_it_2.value);
// 서로 독립적으로 움직임.