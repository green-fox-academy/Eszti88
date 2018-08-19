const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle(xCoord: number, yCoord: number, size: number): void {
    ctx.beginPath();
    ctx.moveTo(xCoord, yCoord);
    ctx.lineTo(xCoord + size / 2, yCoord + size * (Math.sqrt(3) / 2));
    ctx.lineTo(xCoord - size / 2, yCoord + size * (Math.sqrt(3) / 2));
    ctx.closePath();
    ctx.stroke();
}

let sideSize: number = 20;
let numOfRows: number = 21;

for (let i: number = 0; i < numOfRows; i++) {
    for (let j: number = 0; j <= i; j++) {
        drawTriangle(canvas.width / 2 - i * sideSize / 2 + j * sideSize, 100 + i * (Math.sqrt(3) / 2) * sideSize, sideSize);
    }
}