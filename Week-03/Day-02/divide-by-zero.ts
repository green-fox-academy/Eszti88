declare function require(path: string): any;
'use strict';
export{};

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideNumber(inputNumber: number): any {
    try {
        if (inputNumber === 0) {
            throw new Error('fail');
        }
        let result: number = 10 / inputNumber;
        return result;
    }
    catch (e) {
        return (e.message);
    }
}
console.log(divideNumber(0));


/* MÚLT PÉNTEKIG ÍGY CSINÁLTAM VOLNA:
function divideNumber(inputNumber: number): any {
    if (inputNumber === 0) {
        return 'fail';      //nem c.log, mert akkor undefinedot is kiír. return kell
    } else {
        let result: number = 10 / inputNumber;
        return result;
    }    
}
console.log(divideNumber(5)); */