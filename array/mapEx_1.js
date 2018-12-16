/*
    Map
    배열요소를 '변형'함. 어떠한 형태로든 변형이 가능하다.
    모두 사본을 반환하며 원래 배열은 바뀌지 않는다.
*/

const cart = [
    { name: "Widget", price: 9.95 }, 
    { name: "Gadget", price: 22.95 }
];

const names = console.log(cart.map(x => x.name));

const prices = console.log(cart.map(x => x.price));

const prices_arr = cart.map(x => x.price)

const discountPrices = console.log(prices_arr.map(x => x*0.8));