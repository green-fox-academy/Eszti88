'use strict';
export { };

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(checkNums(listOfNumbers));

export = checkNums;

function checkNums(listOfNumbers: number[]) {
    let checkNums: boolean = false;

    for (let i: number = 0; i < listOfNumbers.length; i++) {
        // if (listOfNumbers[i] == 4 && 8 && 12 && 16) {
        if (listOfNumbers.indexOf(4) > -1 && listOfNumbers.indexOf(8) > -1 && listOfNumbers.indexOf(12) > -1 && listOfNumbers.indexOf(16) > -1) {
            checkNums = true;
        }
        // ez a > -1 azt jelenti, hogy benne van
        //}
    }
    if (checkNums) {
        return "true";
    } else {
        return "false";
    }
}

//VAGY EGY TÖMBBE KISZEDEM HOGY TARTALMAZZA-E A SZÁMOKAT INDEXOFFAL ÉS ARRA ÍROK BOOLEAN.