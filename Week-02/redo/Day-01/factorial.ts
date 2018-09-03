'use strict';
export{};

// -  Create a function called `factorio`
//    that returns it's input's factorial

//faktoriális pl: 5! = 1*2*3*4*5 = 120, és 0! = 1

function factorio(inputNumber: number): number {
  let myNumber: number = 1;
  for (let i: number = 1; i <= inputNumber; i++) {
    myNumber *= i;
  }
  return myNumber;
}

console.log(factorio(5));
