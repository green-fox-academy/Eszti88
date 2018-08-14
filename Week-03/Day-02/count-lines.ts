declare function require(path: string): any;
'use strict';
export{};

const fs = require('fs');

const charEncoding = 'utf-8';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

// here I open the file
function opensFile(fileName: string): string {
    return fs.readFileSync('my-file.txt', charEncoding);
}

// here I do what I was told to do:
function countLines(inputString: string): number {
    const fileContent: string = opensFile('my-file.txt');
    if (fileContent === null) {
        return 0;
    } else {
        //array-t csinálok, aminek megszámolom az elemeit: hány soros a fájlom
        return fileContent.split('\r\n').length;         
    }
}
console.log(countLines('my-file.txt'));
