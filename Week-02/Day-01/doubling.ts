// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter 
//    and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123;

/* function doubling(number: number) {
    number = baseNum * 2;
    console.log(number);
} 

(doubling(baseNum)); */

function doubling (inputNumber: number ){
    return inputNumber *2;
}

let answer = doubling(baseNum);
console.log(answer);

