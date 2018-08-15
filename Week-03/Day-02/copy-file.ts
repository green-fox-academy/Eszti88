declare function require(path: string): any;
'use strict';
export{};

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
const charEncoding = 'utf-8';

/*// here I open the file
function openFile(fileName: string): string {
    return fs.readFileSync('my-file.txt', charEncoding);
} */         //a return utáni rész ment a writeFileSync második paraméterének

function copyFile(fileName: string, newFileName: string): void {
    try {
        fs.writeFileSync(newFileName, fs.readFileSync('my-file.txt', charEncoding)); //mibe és mit
    }
    catch { }
}

copyFile('my-file.txt', 'my-file2.txt');