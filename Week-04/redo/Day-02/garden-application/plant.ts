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
}