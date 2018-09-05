'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(inputArray: string[]) {
  let newFar: string[] = [];
  for (let i: number = 0; i < inputArray.length; i++) {
    newFar.push(inputArray[i] + 'a');
  } 
  return newFar; 
};

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;