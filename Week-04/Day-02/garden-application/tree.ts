import { Plant } from "./plant";

'use strict';

class Tree extends Plant {

  constructor(waterAmount: number = 0) {
    super(name, waterAmount, 10, 0.4);
  }
}