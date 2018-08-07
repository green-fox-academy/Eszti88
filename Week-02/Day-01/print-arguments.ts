'use strict';
export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(inputNumber: any[]) {
  for (let i: number = 0; i < inputNumber.lenght; i++) {
      console.log(inputNumber[i]);      
  }

  printParams();