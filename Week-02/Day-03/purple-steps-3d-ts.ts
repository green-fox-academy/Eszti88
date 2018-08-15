'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let firstSquareSize: number = 15;
let numberOfSquares: number = 7;
let origo: number = 15; 
for (let i: number = 1; i < numberOfSquares; i++) {
    ctx.fillStyle = 'darkviolet';
    ctx.fillRect(origo, origo, i * firstSquareSize, i * firstSquareSize);
    origo = origo + i * firstSquareSize;
}