'use strict';
export{};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(inputString: string): string {
  let newString: string = '';
  for (let i: number = inputString.length - 1; i >= 0; i--) {
    newString += inputString[i];
  }
  return newString;
}

console.log(reverse(reversed));

