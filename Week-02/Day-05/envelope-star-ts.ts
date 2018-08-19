'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function drawStar(x: number): void {
    ctx.strokeStyle = 'lightgreen';
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, x);
    ctx.lineTo(canvasWidth / 2 - x, canvasHeight / 2);          //top left part
    ctx.lineTo(canvasWidth / 2, canvasHeight - x);              //bottom left part
    ctx.lineTo(canvasWidth / 2 + x, canvasHeight / 2);          //bottom right part
    ctx.lineTo(canvasWidth / 2, 0 + x);           //top right part
    ctx.stroke();
}

let distance: number = 13;
for (let i: number = 1; i < canvasWidth / 2; i += distance) {
    drawStar(i);
}