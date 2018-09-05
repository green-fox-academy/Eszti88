'use strict';
export{};

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

console.log(numList[3]);

//megoldás map built-in methoddal:

let newList: number[] = numList.map(elem => {
  if (elem === 8) {
    elem = 4;
  }
  return elem;
});

console.log(newList[3]);

//megoldás for looppal:
for (let i: number = 0; i < numList.length; i++) {
  if(numList[i] === 8) {
    numList[i] = 4;
  }
}

console.log(numList[3]);

//megoldás forEach built-in methoddal:

numList.forEach(elem => {
  if (elem === 8) {
    elem = 4;
  }
  return elem;
})

console.log(numList[3]);
