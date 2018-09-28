/* * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5 */
'use strict';

let myNumbers: number[] = [];
let odds: number[] = [];
let evens: number[] = [];

//finding the odd and even numbers:
for (let i: number = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 === 0) {
        evens.push(myNumbers[i]);
    } else {
        odds.push(myNumbers[i]);
    }
}

//a function that returns the average of the smallest odd and largest even:
function getTrickyAvg(inputArray: number[]): any {
    let firstOdd: number = odds[0];
    let lastEven: number = evens[evens.length - 1];
    return (firstOdd + lastEven) / 2;      
} 

getTrickyAvg(myNumbers);

/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;