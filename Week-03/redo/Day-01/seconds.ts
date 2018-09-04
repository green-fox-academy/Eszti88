'use strict';
export{};

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let myList: number[] = [1, 2, 3, 4, 5];
let newList: number[] = [];

function seconds(myList: number[]): number[] {
  for (let i: number = 0; i < myList.length; i++) {
    if (myList[i] % 2 === 0) {
      newList.push(myList[i]);
    }
  } 
  return newList; 
}


console.log(seconds(myList));
