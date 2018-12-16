const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];

// return index
console.log(arr.findIndex(o => o.id === 7));
console.log(arr.findIndex(o => o.name === "Judith"));
console.log(arr.findIndex(o => o.id === 10));
console.log(arr.findIndex(o => o.name === "chulhwan"));