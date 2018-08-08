'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function coordinates (x: number, y: number) {
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    console.log(centerX, centerY);

    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();    
}

for (let i: number =0; i < 400; i+= 130) {
    coordinates(0, i);
}

coordinates(50, 50);