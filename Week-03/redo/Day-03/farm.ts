import { Animal } from "./animal";

'use strict';

/*Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal*/

class Farm extends Animal{
  protected animals: Animal[];

  protected slots: number;    //the number of free places for animals

  constructor(slots: number = 25) {
    super();
    this.animals = [];
    this.slots = slots;          //let's say it's 25
  }

  public breed(inputAnimal: Animal) {
    if (this.slots > 0) {
      let babyAnimal = new Animal();
      this.animals.push(babyAnimal);
      this.slots--;
    }
  }

  public slaughter() {
    let index: number = 0;
    let theLeastHUngry: Animal = this.animals[index];
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[i][this.hungerValue] < this.animals[index][this.hungerValue]) {
        index = i;
      }
    }
    this.animals.splice(index, 1);
    this.slots++;
  }

  public add(inputAnimal: Animal) {
    this.animals.push(inputAnimal);
    this.slots--;
  }
}

let myFarm = new Farm;

let cat = new Animal;
let sheep = new Animal;

myFarm.add(cat);
myFarm.add(sheep);

console.log(myFarm);
console.log(animals);


myFarm.breed(cat);

console.log(myFarm);
console.log(animals);


