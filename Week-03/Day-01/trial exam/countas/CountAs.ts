'use strict';
export{};

// Create a function that takes a string parameter,
// counts the occurances of the letter "a", and returns it as a number.

// example: on the input "Apple" the function should return 1 - print this result
// example: on the input "Blueberry" the function should return 0 - print this result

let myString: string = 'Alma';
let aCounter: number = 0;

/* the way I solved the exercise on the trial exam on the 14th August 2018:
for (let i: number = 0; i < myString.length; i++) {
    if (myString.charAt(i) === 'a' || myString.charAt(i) === 'A') {
        aCounter++;
    }
} */

// the way I solved on the 19th August 2018:
function countingAs(inputString: any): any {
    if (myString.includes('a' || 'A')) {
        aCounter++;
    }    
}

console.log(aCounter);

