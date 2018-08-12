'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareDrawing(squareSize: number): void {
    ctx.strokeRect(canvas.width/2 -squareSize/2, canvas.height/2 - squareSize/2, squareSize, squareSize);
}

for (let i: number = 0; i < 3; i++) {
    squareDrawing((i+1)*50);
}
