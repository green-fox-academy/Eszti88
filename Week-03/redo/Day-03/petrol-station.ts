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
    this.gasAmount -= inputCar.capacity; 
    inputCar.gasAmount += inputCar.capacity;  
  }
}

let myStation: Station = new Station(500);  //let's set gasAmount to 500 units just to try if the program is running or not

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
}

let myCar: Car = new Car();

myStation.refill(myCar);
console.log(myCar);
console.log(myStation);
