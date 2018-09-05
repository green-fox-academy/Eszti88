declare function require(path: string): any;
'use strict';
export{};

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
const charEncoding = 'utf-8';

//opening file:
function opensFile(fileName: string): string {
  return fs.readFileSync('my-file.txt', charEncoding);
}

//appending a line to existing file:
function addsMyName(fileName: string): any {
  let fileContent: string = opensFile('my-file.txt');
  try {
    fs.appendFile('my-file.txt', '\nEszti', (e) => {
      if (e) {
        throw new Error('Unable to read file: my-file.txt');
      }
    });
  }
  catch (e) {
    console.log((e.message));    
  }
}

addsMyName('my-file.txt');