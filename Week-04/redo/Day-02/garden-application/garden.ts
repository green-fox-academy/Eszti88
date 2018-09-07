import { Plant } from "./plant";

export class Garden {
  protected plants: Plant[];

  constructor() {
    this.plants = [];
  }

  public add(inputPlant: Plant) {
    this.plants.push(inputPlant);    
  }

  public watering() {

  }
}

let myGarden = new Garden;

