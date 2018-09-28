declare function require(path: string): any;
'use strict';
export{};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server

const fs = require('fs');
const charEncoding: string = 'utf-8';

function readFromFile(inputFile: string): sting {
    return fs.readFileSync(inputFile, charEncoding);
}

// Write a function that returns an array with the unique IP adresses.

function uniqueIPs(inputFile: string) {
    let IPList: any[] = 
}

// Write a function that returns the GET / POST request ratio.
