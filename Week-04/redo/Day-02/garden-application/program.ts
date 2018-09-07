'use strict';

import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";

let flower1 = new Flower('yellow Flower');
let flower2 = new Flower('Blue Flower');
let tree1 = new Tree('Purple Tree');
let tree2 = new Tree('Orange Tree');

let myGarden = new Garden();

myGarden.add(flower1);
myGarden.add(flower2);
myGarden.add(tree1);
myGarden.add(tree2);

console.log(myGarden);

myGarden.watering(40);

console.log(myGarden);
