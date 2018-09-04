'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let pairs: string[] = [];

function makingMatches(inputString1: string[], inputString2: string[]) {
  for (let i: number = 0; i < Math.min(inputString1.length, inputString2.length); i++) {
    pairs.push(inputString1[i]);
    pairs.push(inputString2[i]);
  }
}

makingMatches(girls, boys);
console.log(pairs);

//console.log(makingMatches(girls, boys));

//export = makingMatches;