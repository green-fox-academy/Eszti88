import { Plant } from "./plant";

'use strict';

class Garden {

  protected plants: Plant[] = [];

  watering(wateringAll: number, details: boolean): void {
    let howManyNeedsWater: number = 0;
    let myStatement: string;

    this.plants.forEach(elem => {
      if (elem.needsWater()) {
        howManyNeedsWater++;
      }
    });

    if (howManyNeedsWater === 0) {
      console.log('Watering is not necessary ');
      return;
    } else {
      console.log(`Watering with $(wateringAll) `);
      return;
    }

    this.plants.forEach(elem => {
      if (details) {
        (elem.needsWater()) {
          console.log(`$(wateringAll / howManyNeedsWater) water is added.`);
      } else {
        console.log(`The water level of $(elem.name) is $(elem.waterAmount) so $(myStatement) `);
      }
      if (elem.needsWater()) {
        elem.watering(wateringAll / howManyNeedsWater);
      }
    });

    if (details) {
      console.log('\r');      
    } 
  }
}