declare function require(path: string): any;
'use strict';
export{};

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

const fs = require('fs');
const charEncoding = 'utf-8';

function writeLines(fileName: string, fileContent: string, numberOfLines: number): void {
  try {
    fs.writeFileSync(fileName, fileContent + '\r\n');
    for (let i: number = 0; i < numberOfLines - 1; i++) {
      fs.appendFileSync(fileName, fileContent + '\r\n', (e) => {
        if (e) {
          throw new Error('Sorry.')
        }
      });      
    }
  }
  catch (e) {
    console.log(e.message);    
  }
}

writeLines('multiple-lines.txt', 'apple', 5);