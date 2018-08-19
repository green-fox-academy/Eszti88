'use strict';
export{};

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let list: number[] = [1, 2, 3, 4, 5];
let newList: number[] = [];

/* the way I solved the exercise on the trial exam on the 14th August 2018:
for (let i: number = 1; i < list.length; i += 2) {
    newList.push(list[i]);
} */

// the way I solved on the 19th August 2018:
newList = list.filter(function(value, index, array) {
    return (index % 2 === 1);
} );

console.log(newList);
