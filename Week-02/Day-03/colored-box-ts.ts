'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "navy";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.stroke();

ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(250, 250);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(50, 250);
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(50, 50);
ctx.stroke();
