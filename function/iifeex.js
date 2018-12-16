const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`
    }
})();

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());