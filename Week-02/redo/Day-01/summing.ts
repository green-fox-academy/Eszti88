'use strict';
export{};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(givenNumber: number) {
  let myNumber: number = 0;
  for (let i: number = 0; i <= givenNumber; i++) {
    myNumber += i;
  }
  return myNumber;
}

console.log(sum(4));
