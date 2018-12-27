const books = [
    `Twinkle, twinkle, little bat!`,
    `How I wonder what you're at!`,
    `Up above the wordl you fly,`,
    `Like a tea tray in the sky.`,
    `Twinkle, twinkle, little bat!`,
    `Hwo I wonder what you're at!`
]

// books 배열에 values 메소드를 써서 이터레이터를 만들 수 있다.

const it = books.values();

// 이터레이터를 읽기 시작하려면 next 메소드를 호출해야 한다.
// next 메소드가 반환하는 객체는 value와 done이 있다.
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // books 배열이 끝나도 계속 호출할 수 있다.



