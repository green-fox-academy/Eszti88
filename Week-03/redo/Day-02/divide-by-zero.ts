declare function require(path: string): any;
'use strict';
export{};

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(inputNumber: number): any {
 try{
   if (inputNumber === 0) {
     throw new Error('fail');
   }
   let result: number = 10 / inputNumber;
   return result;
 }
 catch (e) {
   return (e.message);
 }
}

console.log(divide(5));
console.log(divide(0));

