declare function require(path: string): any;
'use strict';
export{};

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer

const fs = require('fs');
const charEncoding = 'utf-8';

function ticTacResult(fileName: string): void {
    fs.readFileSync(fileName, charEncoding);
    return 
}

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw