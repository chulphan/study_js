
const arr = [
    { id: 5, name: "ChulHwan" }, 
    { id: 10, name: "NaJeong" }, 
    { id: 15, name: "JaeJoon" }
];

console.log(arr.find(o => o.id === 5));
console.log(arr.find(o => o.name === "NaJeong"));
console.log(arr.find(o => o.name === "James"));