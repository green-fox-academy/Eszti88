import { Plant } from "./plant";

export class Garden {
  protected plants: Plant[];

  constructor() {
    this.plants = [];
  }

  public add(inputPlant: Plant): void {
    this.plants.push(inputPlant);
  }

  public watering(inputWaterAmount: number): void {
    this.plants.forEach(elem => {
      if (elem.isThisty) {
        elem.getWater;
      }
    })
  }
}



