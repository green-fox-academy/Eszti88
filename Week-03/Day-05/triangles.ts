'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let side: number = 200;
/*let triangleHeight: number = triangleSideSize * (Math.sqrt(3) / 2); */

function drawTriangle(x: number, y: number, side: number) {
    let height: number = side * Math.sqrt(3) / 2;

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(x + side / 2, y + height);
    ctx.lineTo(x - side / 2, y + height);
    ctx.lineTo(x, y);
    ctx.stroke();    
}

function drawFractal(x: number, y: number, side: number, loop: number) {
    if (loop > 1) {
        let startHeight: number = side * Math.sqrt(3) / 2;
        drawTriangle(x, y, side);

        let startX1: number = x + side / 2;
        let startY1: number = y;
        let startX2: number = x;
        let startY2: number = y + startHeight;
        let startX3: number = x - side / 2;
        let startY3: number = y;

        side /= 2;
        startHeight /=2;

        drawFractal(startX1, startY1, side, loop - 1);
        drawFractal(startX2, startY2, side, loop - 1);
        drawFractal(startX3, startY3, side, loop - 1);
    }
}

let startSize: number = canvasWidth / 2;
let startX: number = canvasWidth / 2;
let startY: number = 0;

drawFractal(startX, startY, startSize, 15); 

