declare function require(path: string): any;
'use strict';
export{};

const fs = require('fs');
const charEncoding = 'utf-8';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

// here I open the file

function opensFile(fileName: string): string {
    return fs.readFileSync('my-file.txt', charEncoding);
}

function addsMyName(inputString: string): string {
    let fileContent: string = opensFile('my-file.txt');
    AppendFile('my-file.txt', 'Eszti');
}

console.log(addsMyName(my-file.txt));


/* ha nincs ilyen fájl, megcsinálja, ha van, felülírja
writeToAFile('my-file.txt', 'Eszti') */   