/*
    Method which can be use instance of class is called prototype method.

    Car.prototype.shift == Car#shift

    all function in javascript have special property called 'prototype'

    object instance save a protytype property of constructor at __proto__ property.
*/

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear) { this.userGear = gear; }
}

const car1 = new Car('genesis', 'g330');
const car2 = new Car('bmw', '330');

console.log(car1.shift === Car.prototype.shift); // true
car1.shift('D');
car1.shift('d'); // error
car1.userGear; // D
console.log(car1.shift === car2.shift); // true

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift); //false. because car1.shift is newly defined at the instance.
console.log(car1.shift === car2.shift);
car1.shift('d');
console.log(car1.userGear);
