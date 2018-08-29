import { Plant } from "./plant";

'use strict';

class Flower extends Plant {

  constructor(waterAmount: number = 0) {
    super(name, waterAmount, 5, 0.75);
  }
}