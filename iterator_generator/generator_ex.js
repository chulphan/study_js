/*
    제너레이터(generator)

    이터레이터를 사용해 자신의 실행을 제어하는 함수.
    제너레이터에 추가된 새로운 개념.
        1. 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어.
        2. 실행 중인 함수와 통신한다는 것.
    ** 원래의 함수는 매개변수를 받고 값을 반환하지만, 호출자는 매개변수 외에는
        함수의 실행을 제어할 방법이 없음. 즉, 제어권을 완전히 넘기는 것.
    
*/

// 무지개 색을 반환하는 단순한 제너레이터
function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blud';
    yield 'indigo';
    yield 'violet';
}

// 제너레이터 함수를 호출하면 이터레이터를 얻는다.

const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// rainbow 제너레이터는 이터레이터를 반환하므로 for...of 루프에서 쓸 수 있다.
for(let color of rainbow())
    console.log(`${color}`)