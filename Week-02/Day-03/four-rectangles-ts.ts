'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.



let rectangles: object[] = [
    {
        colour: "yellow",
        height: 30,
        width: 50
    },
    {
        colour: "blue",
        height: 60,
        width: 100
    },
    {
        colour: "green",
        height: 75,
        width: 100
    },
    {
        colour: "red",
        height: 120,
        width: 150
    }
];