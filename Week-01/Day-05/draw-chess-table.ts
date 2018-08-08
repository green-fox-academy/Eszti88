'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

let lineCount: number = 8;

for (let x: number = 1; x <= 8; x++) {
    if (x % 2 == 0) {
        console.log(' % % % %');
    } else {
        console.log('% % % % ');
    }
}