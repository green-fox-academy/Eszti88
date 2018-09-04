'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(inputArray: number[]): string {
  for (let i: number = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 7) {
      return 'Hooray';      
    } else {
      return 'Nooooooooo';      
    }
  } 
}

console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;