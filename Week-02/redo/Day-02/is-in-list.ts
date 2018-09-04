'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(inputArray: number[]) {
  let result: boolean = false;

  for (let i: number = 0; i < inputArray.length; i++) {
    if (inputArray.indexOf(4) > -1 && inputArray.indexOf(8) > -1 && inputArray.indexOf(12) > -1 && inputArray.indexOf(16) > -1) {
      result = true;
    }
  }
  if (result) {
    return 'true';
  } else {
    return 'false';
  }
}

/*function checkNums(inputArray: number[]): boolean {
  for (let i: number = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 4 && inputArray[i] === 8 && inputArray[i] === 12 && inputArray[i] === 16) {
      return true;
    } else {
      return false;
    }
  }
}*/

console.log(checkNums(listOfNumbers));

export = checkNums;