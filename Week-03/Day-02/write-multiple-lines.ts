declare function require(path: string): any;
'use strict';
export{};

//Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.
const fs = require('fs');

function writeLines(fileName: string, fileContent: string, numberOfLinesInFile: number): void {
    try {
        fs.writeFileSync(fileName, fileContent + '\r\n'); //csak a write felülírná mindig, ezért kell for loop után append
        for (let i: number = 1; i < numberOfLinesInFile; i++) {
            fs.appendFileSync(fileName, fileContent + '\r\n');
        }
    }
    catch {
    }
}

writeLines('multiple-lines.txt', 'apple', 5);