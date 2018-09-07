'use strict';

/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount*/

class Station {
  protected gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  public refill(inputCar: Car) {
    this.gasAmount -= inputCar.getCapacity();    //a car osztályban függvény, itt ráhiv.
    }
}

let myStation = new Station(500);  //let's set gasAmount to 500 units just to try if the program is running or not

/*Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100*/

class Car {
  protected gasAmount: number;
  protected capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }

  public getCapacity() {
    return this.capacity;
  }

  public getGasAmount() {
    return this.gasAmount += this.capacity;
  }
}

let myCar = new Car();

console.log(myCar);
console.log(myStation);

myStation.refill(myCar);
myCar.getGasAmount();

console.log(myCar);
console.log(myStation);

