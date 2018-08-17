'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

let squareSize: number = 15;
let collumns: number = canvas.width / squareSize;
let rows: number = canvas.height / squareSize;

for (let i: number = 0; i < collumns; i++) {
    if (i % 2 === 0) {
        for (let j: number = 0; j < rows; j++) {
            ctx.fillRect(j * squareSize, i * collumns, collumns, collumns);   //vízszintes csíkokat ír
        }
    } 
}

