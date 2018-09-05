'use strict';

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

// megcserélem a 2. és 5. elemeket a tömbben:
function quoteSwap(inputArray: string[]): string[] {
  let change: string = inputArray[5];
  inputArray[5] = inputArray[2];
  inputArray[2] = change;
  return inputArray;
}

// eltávolítom a vesszőket:
// a replace nem működik stringen
words = words.replace(', ', '');
/*words = words.join(' ');*/

console.log(quoteSwap(words));

// Expected output: "What I cannot create I do not understand."

export = quoteSwap;