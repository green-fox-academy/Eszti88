'use strict';
export{};

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

function swap(inputArray: string[]): string[]{
  let cba: string[] = abc.reverse();
  return cba;
}

console.log(swap(abc));