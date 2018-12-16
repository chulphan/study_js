
// find method does not support IE... IE IS TERRIBLE BROWSER!!!

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

console.log(arr.find(p => p.id === juliet.id));

console.log(arr.find((p) => {
    console.log('arrow this ', this); // empty object..
    return p.id === this.id
}, juliet));

console.log(arr.find(function(p) {
    console.log('function this ', this); // juliet object.
    return p.id === this.id
}, juliet))

console.log(arr.find(function(p) {
    console.log('function this ', this); // peter object.
    return p.id === this.id
}, peter))