'use strict';

import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";

let flower1 = new Flower('yellow Flower');
let flower2 = new Flower('blue Flower');
let tree1 = new Tree('purple Tree');
let tree2 = new Tree('orange Tree');

let myGarden = new Garden();

myGarden.add(flower1);
myGarden.add(flower2);
myGarden.add(tree1);
myGarden.add(tree2);

console.log(myGarden);
myGarden.status();
console.log('\nWatering with 40:\n');
myGarden.watering(40);
myGarden.status();
console.log('\nWatering with 70:\n');
myGarden.watering(70);
myGarden.status();
console.log(myGarden);

