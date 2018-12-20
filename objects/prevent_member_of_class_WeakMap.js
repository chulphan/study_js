const Car = (function() {
    
    const carProps = new WeakMap();
    let self;
    class Car {
        constructor(make, model) {
            self = this;
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { return carProps.get(this).userGear; }
        set userGear(gear) {
            if(this._userGears.indexOf(gear) < 0) 
                throw new Error(`Invalid gear: ${gear}`);
            console.log('this ', this); // the 'this' keyword bind to the class Car.
            carProps.get(this).userGear = gear;
            
        }

        shift(gear) { this.userGear = gear; }
    }
    console.log('this ', this); // It seems like the global object...
    return Car;
})();

const car1 = new Car('genesis', 'g330');

console.log(car1.userGear = 'D'); // now, we cannot directly access to the userGear property.
console.log(car1.userGear);
