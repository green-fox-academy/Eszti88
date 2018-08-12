'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

for (let i: number = 1; i < 20; i++) {
    ctx.fillStyle = 'darkviolet';
    ctx.fillRect(i*15, i*15, 15, 15);
}