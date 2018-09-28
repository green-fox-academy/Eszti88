'use strict';

export class Garden {

  protected name: string;
  protected colour: string;
  protected waterAmount: number;
  protected needsWater: boolean;

  constructor(name: string, colour: string, needsWater: boolean) {
    this.name = name;
    this.colour = colour;
    this.needsWater = needsWater;
  }
}