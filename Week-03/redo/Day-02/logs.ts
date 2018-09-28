declare function require(path: string): any;
'use strict';
export{};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
const charEncoding = 'utf-8';

function readFile(fileName: string): any[] {
  return fs. readFileSync('log.txt', charEncoding);
}

function uniqueIPs(inputArray: any[]) {
  let IPArray: any[] = [];
  for (let i: number = 0; i < inputArray.length; i++) {
    IPArray.push(inputArray[i][5]);
  }
  return IPArray;  
}

console.log(uniqueIPs(readFile('log.txt')));
