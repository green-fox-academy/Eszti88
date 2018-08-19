'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

function drawSquare(size: number): void {
    let x: number = 0;
    let y: number = 0;
    for (let i: number = 0; i <= canvas.height / size; i++) {
        x = 0;
        y = i * size;
        if (i % 2 === 0) {
            for (let j: number = 0; j <= canvas.width; j += size * 2) {
                ctx.fillRect(x, y, size, size);
                x += size * 2;
            }
        } else {
            for (let j: number = 0; j <= canvas.width; j += size * 2) {
                ctx.fillRect(x + size, y, size, size);
                x += size * 2;
            }
        }
    }
}

drawSquare(50);