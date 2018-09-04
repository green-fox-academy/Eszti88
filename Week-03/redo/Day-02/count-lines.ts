declare function require(path: string): any;
'use strict';
export{};

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
const charEncoding = 'utf-8';

function opensFile(fileName: string): string {
  return fs.readFileSync('my-file.txt', charEncoding);
}

function countsLines(fileName: string): number {
  const fileContent: string = opensFile('my-file.txt');
  try {
    if (fileContent) {
      return fileContent.split('\r\n').length;
    }
  }
  catch (e) {
    if (!fileContent) {
      return 0;
    }
  }
}

console.log(countsLines('my-file.txt'));
