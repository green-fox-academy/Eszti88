'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let x: number = 0; x < lineCount; x++) {
    if (x == 0) {
        console.log('   *');
    } if (x == 1) {
        console.log('  ***');
    } if (x == 2) {
        console.log(' *****');
    } if (x == 3) {
        console.log('*******');
    } if (x == 4) {
        console.log(' *****');
    } if (x == 5) {
        console.log('  ***');
    } if (x == 6) {
        console.log('   *');
    }
}