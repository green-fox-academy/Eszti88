declare function require(path: string): any;
'use strict';
export{};

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
const charEncoding = 'utf-8';

function copyFile(fileName1: string, fileName2: string): void {
  let success: boolean = true;
  try {
    fs.writeFileSync(fileName2, fs.readFileSync(fileName1, charEncoding));
  }
  catch (e) {
    success = false;
  }
  finally {
    console.log(success);    
  }
}

copyFile('my-file.txt', 'copied-file.txt');