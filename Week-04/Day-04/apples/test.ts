'use strict';

import { test } from "tape";
import { Apple } from "./apples"

test('function should be equal', (t) => {        //t helyett írhatsz teszt-et is
    let apple1: Apple = new Apple();
    let appleResult = apple1.getApple();

    t.equal('apple', appleResult);
    t.end();

})                

