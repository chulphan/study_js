const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];

console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));