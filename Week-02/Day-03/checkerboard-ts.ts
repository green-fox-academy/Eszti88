'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

let squareSize: number = 20;
let rows: number = canvas.width / squareSize;
let collumns: number = canvas.height / squareSize;

// too complicated and doesn't run :(
/*for (let i: number = 0; i < rows; i++) { }
    if (rows % 2 == 0) {
        for (let j: number = 0; j < collumns; j++) {
            if (collumns % 2 == 0) {
                ctx.fillStyle = 'black';
                ctx.fillRect(collumns * squareSize, rows * squareSize, squareSize, squareSize);
            } else {
                ctx.fillStyle = 'white';
                ctx.fillRect(collumns * squareSize, rows * squareSize, squareSize, squareSize);
         }
        }
    }
} */