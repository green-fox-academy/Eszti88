'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareDrawing(xCoord: number, yCoord: number) {
    ctx.fillRect(xCoord, yCoord, 50, 50)
}

for (let i: number = 0; i < 4; i++) {
    squareDrawing ( (i + 1) * 50, (i+1) * 50);
}