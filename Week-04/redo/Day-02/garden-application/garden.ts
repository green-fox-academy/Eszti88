import { Plant } from "./plant";

export class Garden {
  protected plants: Plant[];

  constructor() {
    this.plants = [];
  }

  public add(inputPlant: Plant): void {
    this.plants.push(inputPlant);
  }

  public status() {
    this.plants.forEach(elem => {
      if (elem.isThirsty) {
        console.log(`The ${elem.getName()} needs water.`);        
      } else {
        console.log(`The ${elem.getName()} does not need water`);        
      }
    })
  }

  public watering(inputWaterAmount: number): void {
    let counter: number = 0;
    this.plants.forEach(elem => {
      if (elem.isThirsty) {
        counter++;
      }
    })

    this.plants.forEach(elem => {
      if (elem.isThirsty) {
        elem.getWater(inputWaterAmount / counter);
      }
    })
  }
}