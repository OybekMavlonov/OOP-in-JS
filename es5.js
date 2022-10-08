// hard-coding object with values
var car1 = { brand: "Volvo", model: "CX09", year: "2020" };
var car2 = { brand: "Mitsubishi", model: "ASX", year: "2016" };
var car3 = { brand: "Toyota", model: "Fortuner", year: "2019" };

// template function
function Car(brand, model, year) {
  this.brand = brand;
  this.moel = model;
  this.year = year;
}

var car4 = new Car("BMW", "XS", 2017);
var car5 = new Car("VW", "Tiguan", 2018);
