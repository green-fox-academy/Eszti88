'use strict';
export{};

// Create a function that takes a string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// example: on the input "Apple" the function should return 1 - print this result
// example: on the input "Blueberry" the function should return 0 - print this result

function aCounter(inputString: string): number {
  let howManyAs: number = 0;
  for (let i: number = 0; i < inputString.length; i++) {
    if (inputString[i] === 'a' || inputString[i] === 'A') {
      howManyAs++;
    }
  }
  return howManyAs;  
}

console.log(aCounter('Apple'));
console.log(aCounter('Blueberry'));
