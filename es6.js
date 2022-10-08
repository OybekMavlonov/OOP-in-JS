class Vehicle {
  constructor(year) {
    this._year = year;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  start() {
    console.log("the vehicle started...");
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(year);
    this._brand = brand;
    this._model = model;
  }

  start() {
    super.start();
    console.log("the car started");
  }

  static toString() {
    console.log("toString() called...");
  }
}

let car4 = new Car("BMW", "XS", 2017);
let car5 = new Car("VW", "Tiguan", 2018);

car4.year = 2020;
car5.start();

console.log(car4.year);
console.log(car5);
Car.toString();
