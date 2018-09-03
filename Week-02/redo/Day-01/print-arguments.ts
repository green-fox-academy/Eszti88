'use strict';
export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(inputParams: any[]): any {
  for (let i: number = 0; i < inputParams.length; i++) {
  console.log(inputParams[i]);  
  }
} 

printParams([3, 4]);
printParams(['alma', 'körte', 3]);