'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// drawing the big main circle:
function drawCircle(x: number, y: number, r: number) {

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
}

//drawCircle(200, 200, 200);

//drawing the 3 inner circles:

function draw3Circles(x2: number, y2: number, radius: number) {
    let xModified: number[] = [];
    let yModified: number[] = [];

    for (let i: number = 0; i < 3; i++) {
        xModified[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        yModified[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        drawCircle(x2 + xModified[i], y2 + yModified[i], radius / 2);
    }

    //draw3Circles(200, 200, 200);

    // drawing the rest of the circles to complete the fractal:

    if (radius < 30) {
        return;
    } else {
        for (let i: number = 0; i < 3; i++) {
            xModified[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
            yModified[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
            draw3Circles(x2 + xModified[i], y2 + yModified[i], radius / 2);
        }
    }    
}

drawCircle(200, 200, 200);  // as the width and height of the canvas are both 400
draw3Circles(200, 200, 200);