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

// appends a line to existing file:
function addsMyName(inputString: string): any {
    let fileContent: string = opensFile('my-file.txt');
    try {
        fs.appendFile('my-file.txt', '\nEszti', (err) => {
            if (err) throw new Error('Unable to read file: my-file.txt');
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

addsMyName('my-file.txt');          // nem kell console.log, mert akkor kiírja a terminálba, hogy undefined


/* ha nincs ilyen fájl, megcsinálja, ha van, felülírja
writeToAFile('my-file.txt', 'Eszti') */