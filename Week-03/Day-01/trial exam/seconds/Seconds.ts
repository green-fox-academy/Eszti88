'use strict';
export{};

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let list: number[] = [1, 2, 3, 4, 5];
let newList: number[] = [];

for (let i: number = 1; i < list.length; i += 2) {
    newList.push(list[i]);
}

console.log(newList);
