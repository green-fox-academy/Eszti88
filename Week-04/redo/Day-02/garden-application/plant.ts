'use strict';

export class Plant {
  protected name: string;
  protected currenWaterAmount: number;
  protected absorbingRatio: number;
  protected needWaterLimit: number;

  constructor(name: string) {
    this.name = name;
    this.currenWaterAmount = 0;
  }

  public isThisty() {
    if (this.needWaterLimit < 5) {
      return true;      
    } else {
      return false;
    }
  }

  public getCurrentWaterAmount() {
    return this.currenWaterAmount;
  }

  public getAbsorbingRatio() {
    return this.absorbingRatio;
  }

  public getWater(inputWaterAmount: number) {
    return this.currenWaterAmount += inputWaterAmount * this.absorbingRatio;
  }
}