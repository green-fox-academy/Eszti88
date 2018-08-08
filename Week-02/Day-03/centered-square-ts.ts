'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw a green 10x10 square to the center of the canvas.

// In a bit difficult way:

function coordinates (x: number, y: number) {
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    console.log(centerX, centerY); 
    
    ctx.fillStyle = "green";
    ctx.fillRect(centerX - 5, centerY - 5, 10, 10);     
}

coordinates(20, 20);




/* // The easiest solution, as the width and height of the canvas are known

ctx.fillStyle = "green";
ctx.fillRect(295, 195, 10, 10);
*/

