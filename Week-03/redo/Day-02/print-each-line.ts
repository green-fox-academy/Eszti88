declare function require(path: string): any;
'use strict';
export{};

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');
const charEncoding = 'utf-8';

function opensFile(fileName: string): string {
  try {
    if (!fileName) {
      throw new Error('Unable to read file: ' + fileName);
    }
    return fs.readFileSync(fileName, charEncoding);
  }
  catch (e) {
    return (e.message);
  }
}

console.log(opensFile('my-file.txt'));
