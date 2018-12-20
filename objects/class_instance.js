// make class called Car.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0)
            throw new Error (`Invalid gear: ${gear}`);
        this.userGear = gear; // 'this' is instance of placeholder that will be make later.
                              // we can know what the 'this' is when we invoke the method.
    }
}

/*
const car1 = new Car(); // make instance of class Car. first implement constructor of the class, the constructor will be initialize instance of object.
const car2 = new Car();

console.log(car1 instanceof Car)
console.log(car1 instanceof Array)
console.log(car1 instanceof Object)
*/

const car1 = new Car("Genesis", "G330");
const car2 = new Car("Verna", "unknown");

car1.shift('D'); // we invoke car1.shift() then the 'this' is bind to car1.
car2.shift('R'); // "
