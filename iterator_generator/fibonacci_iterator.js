class FibonacciSequence {
    [Symbol.iterator]()  {
        let a = 0, b = 1;

        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fibo = new FibonacciSequence();

let i = 0;

for (let n of fibo) {
    console.log(n);
    if(++i > 9) break;
}