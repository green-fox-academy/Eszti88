/* * Write a function called `findMostProductiveYear` that helps you find the most productive year for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most productive year for studio.
 * 
 * Examples:
 *  - If we call the function with 'marvel'
 *  - should return 'marvel has made the most movies in 2017.'
 * 
 *  - If we call the method with 'ghibli':
 *  - should print, 'Cannot find studio, please try again later.'.
 * 
 * Hint: 
 *  - You can find some example files in this folder. (marvel.csv, paramount.csv)
 *  - Most productive year: The year in which the studio has made the most movies. */

 //a csv.fájlokat egyszerűbb terminálban megnyitni

'use strict';

declare function require(params: string):any;

const fs = require('fs');
const path: string = 'marvel.csv';
const charEncode: string = 'utf-8';

console.log(fs.readLinesFRomFile(path, charEncode));

const readFromFile = (path: string, enc: string): string[] => {
    return fs.readFileSync(path, enc).split('\n');
}

const getYear = (line: string): number => {
    return parseInt(line.split(',')[1]);
}

const readYearsFreqFromLines = (lines: string[]): any => {
    let freq: any = {};
    lines.forEach((elem) => {
        if (freq[getYear(elem)]) {
            (freq[getYear(elem)])++;
        } else {
            (freq[getYear(elem)]) = 1;
        }
    });

    return freq;
}

let maxFreq: number;

Object['values']()









/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;
