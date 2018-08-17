'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(xCoord: number, yCoord: number): void {
    let centerX: number = canvas.width / 2;
    let centerY: number = canvas.height / 2;
    
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(xCoord, yCoord);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();
}

let distance: number = 20;

for (let i: number = 0; i <= canvas.width; i += distance) {
    drawLine(i, 0);
}

for (let i: number = 0; i <= canvas.height; i += distance) {
    drawLine(0, i);
}

for (let i: number = 0; i <= canvas.width; i += distance) {
    drawLine(i, canvas.height);
}

for (let i: number = 0; i <= canvas.height; i += distance) {
    drawLine(canvas.width, i);
}