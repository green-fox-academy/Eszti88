'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumOfDigits(myNumber: number): any {
    
    if (myNumber < 10) {
        return myNumber;
    } else {
        return myNumber % 10 + sumOfDigits(Math.floor(myNumber / 10));
    }
}

console.log(sumOfDigits(126));
