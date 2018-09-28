'use strict';

//Create a function that takes a list and a value, and returns the index of that value in the list. 
//If the value is not it the list, the function should return -1.

//import { test } from 'tape';
import * as test from 'tape';
import indexOfNumber from "./get-index";
/*declare function require(path: string): any;
const test = require('tape');*/


test('is it one?', (t) => {
    let myNumbers: number[] = [1, 2, 3, 4, 5, 6];
    let numberToFind: number = 2;

    let result: number = indexOfNumber(myNumbers, numberToFind);

    t.equal(result, 8);
    t.end();

})

