'use strict';

export class Plant {
  protected name: string;
  protected currenWaterAmount: number;
  protected absorbingRatio: number;
  protected needWaterLimit: number;

  constructor(name: string) {
    this.name = name;        
  }

  public getName() {
    return this.name;
  }

  public isThirsty(): boolean {
    if (this.currenWaterAmount < this.needWaterLimit) {
      return true;
    } else {
      return false;
    }
  }
}