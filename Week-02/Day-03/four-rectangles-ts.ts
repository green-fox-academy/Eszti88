'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

let myColor: string [] = ['red' , 'blue' , 'green' , 'yellow'];
for (let i: number = 0; i < 4; i++) {
    ctx.fillStyle = myColor[i];
    ctx.fillRect( (i+1)*75 , (i+1)*75 , (i+1)*25, (i+1)*25);
}