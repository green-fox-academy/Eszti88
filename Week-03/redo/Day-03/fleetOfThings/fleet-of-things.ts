'use strict';

import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let getmilk = new Thing('Get milk');
let removeTheObstacles = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let eatLunch = new Thing('Eat lunch');

fleet.add(getmilk);
fleet.add(removeTheObstacles);
fleet.add(standUp);
fleet.add(eatLunch);

standUp.complete();
eatLunch.complete();

fleet.print();
