'use strict';

export class Plant {
  protected name: string;
  protected waterAmount: number;
  protected thirstLevel: number;
  protected wateringRatio: number;

  constructor(name: string, waterAmount: number, thirstLevel: number, wateringRatio: number) {
    this.name = name;
    this.waterAmount = waterAmount;
    this.thirstLevel = thirstLevel;
    this.wateringRatio = wateringRatio;
  }

  needsWater(): boolean {
    if (this.waterAmount < this.thirstLevel) {
      return true;
    } else {
      return false;
    }
  }

  watering(waterAmount): void {
    this.waterAmount += this.wateringRatio * waterAmount;
  }
}