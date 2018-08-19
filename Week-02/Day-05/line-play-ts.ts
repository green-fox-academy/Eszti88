'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let divider: number = 14;
let distance: number = canvasWidth / divider;

function drawMyLines(startX: number, startY: number, endX: number, endY: number, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

for (let i: number = 0; i < distance; i++) {
    drawMyLines(i * distance, 0, canvasWidth, i * distance, "purple");
}

for (let j: number = 0; j < distance; j++) {
    drawMyLines(0, j * distance, j* distance, canvasHeight, "green");
}