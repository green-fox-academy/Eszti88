'use strict';
export { };

// -  Write a function called `sum` that sum all the numbers until 
//    the given parameter
// -  The function should return the result

function sum(givenNumber: number) {
    let myNum: number = 0;
    for (let i = 0; i < givenNumber; i++) {
        myNum = myNum + i;
    }
    return myNum; 
}



console.log(sum(8));

let testNumber: number = 33;

console.log(sum(testNumber));
