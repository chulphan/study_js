const books = [
    `Twinkle, twinkle, little bat!`,
    `How I wonder what you're at!`,
    `Up above the wordl you fly,`,
    `Like a tea tray in the sky.`,
    `Twinkle, twinkle, little bat!`,
    `Hwo I wonder what you're at!`
]

const it = books.values();

let current = it.next();

while (!current.done) {
    console.log(current.value);
    current = it.next(); // 링크드리스트랑 되게 비슷한거 같다..
}