'use strict';

//Create a function that takes a list and a value, and returns the index of that value in the list. 
//If the value is not it the list, the function should return -1.

export default function indexOfNumber(inputArray: number[], inputNumber: number): number {
    //return 0;         //ez volt az első test alatt
    for (let i: number = 0; i < indexOfNumber.length; i++) {
        if (inputArray[i] !== inputNumber) {
            return -1;
        } else {
            return 1;
        }
    }
}