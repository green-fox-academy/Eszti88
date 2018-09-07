import { Plant } from "./plant";

'use strict';

export class Tree extends Plant {

  constructor(name: string) {
    super(name);
    this.name = name;
    this.absorbingRatio = 0.4;
    this.needWaterLimit = 10;
  }
}