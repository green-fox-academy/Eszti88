'use strict';

import { Garden } from "./garden";

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
    return this.currenWaterAmount < this.needWaterLimit;
  }

  public getWater(inputWaterAmount: number): void {
    this.currenWaterAmount += inputWaterAmount * this.absorbingRatio;
  }
}