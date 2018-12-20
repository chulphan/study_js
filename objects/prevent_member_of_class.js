class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() { return this._userGear; }
    set userGear(gear) {
        if(this._userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this._userGear = gear;
    }

    shift(gear) { this.userGear = gear; }
}

const car1 = new Car('Genesis', 'G330');

console.log(car1.userGear);
console.log(car1.userGear = 'P');
console.log(car1.shift('R'));
console.log(car1.userGear);
console.log(car1._userGear = 'D'); // we can still access to the member of class(instance). members of class is not safe from outer access.
console.log(car1.userGear);

