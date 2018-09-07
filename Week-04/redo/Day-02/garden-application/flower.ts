import { Plant } from "./plant";

'use strict';

export class Flower extends Plant {

  constructor(name: string) {
    super(name);
    this.name = name;
    this.absorbingRatio = 0.75;
    this.needWaterLimit = 5; 
    this.currenWaterAmount = 0;   
  }
}