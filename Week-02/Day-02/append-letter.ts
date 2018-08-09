'use strict';
export { };

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

let newString: string[] = [];

function appendA(stringInput: string): string[] {           
    for (let i: number = 0; i < far.length; i++) {
        far[i] += stringInput;
        newString.push(far[i]);
    }
    return newString;
}

console.log(appendA('a'));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;