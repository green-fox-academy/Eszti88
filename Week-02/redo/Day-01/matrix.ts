'use strict';
export{};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let myMatrix: any[] = [];
let size: number = 4;

for (let i: number = 0; i < size; i++) {
  myMatrix[i] = [];
  for (let j: number = 0; j < size; j++) {
    if (i + j + 1 === size) {
      myMatrix[i].push(1);
    } else {
      myMatrix[i].push(0);
    }
  }
}

console.log(myMatrix);