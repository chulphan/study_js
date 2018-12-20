/*
    class Car {
        constructor(make, model) {
            this.make = make...
        }

        shift(gear) { ... }
    }
*/

// in ES5..

function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'D', 'R'];
    this._userGear = this._userGears[0];
}

const car1 = new Car('genesis', 'g330');

console.log(car1.make);
console.log(car1.model);

