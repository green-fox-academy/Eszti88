'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


function coordinates (x: number, y: number) {
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    console.log(centerX, centerY);   

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();
}

for (let i: number =0; i < 400; i+=130) {
    coordinates(0, i);
}

coordinates(20, 20);










// loop mellőzésével

/* ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 20;
ctx.lineTo(50, 380);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.lineTo(580, 50);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(canvas.width/2, canvas.height/2);
ctx.stroke();
*/
