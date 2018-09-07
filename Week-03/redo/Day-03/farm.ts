import { Animal } from "./animal";

'use strict';

/*Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal*/

class Farm {
  protected animals: Animal[];

  protected slots: number;    //the number of free places for animals

  constructor(slots: number = 25) {
    this.animals = [];
    this.slots = slots;          //let's say it's 25
  }

  public breed() {
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
      if (this.animals[i].getHungry < this.animals[index].getHungry) {
        index = i;
      }
    }
    this.animals.splice(index, 1);
    this.slots++;
  }

  public add() {
    this.animals.push();
    this.slots--;
  }
}

let myFarm = new Farm();

let cat = new Animal;
let sheep = new Animal;



