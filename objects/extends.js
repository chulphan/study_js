class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle Created.");
    }

    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car Created");
    }

    deployAirBags() {
        console.log("BWOOSH!");
    }
}


const v = new Vehicle();
v.addPassenger("Chul");
v.addPassenger("Byung");
console.log(v.passengers);
const c = new Car();
c.addPassenger("FastPig");
c.addPassenger("HyungUn");
console.log(c.passengers);

//v.deployAirBags(); //error
c.deployAirBags(); // Bwoosh!!
