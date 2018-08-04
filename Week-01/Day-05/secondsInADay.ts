// Write a program that prints the remaining seconds as an integer from a 
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let secondsADay: number = (60 * 60 * 24);
let secondsSpent: number = ((14 * 60 * 60) + (34 * 60) + 42);

console.log(secondsADay - secondsSpent);
