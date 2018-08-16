// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

//power(3,2) -> 3*3
//power(4,3) -> 4*4*4

function powerNum(base:number, exponent: number): number {
    let result: number = 1;
    for (let i: number = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

//console.log(powerNum(3,2)); // prints out: 9, which is good
console.log(powerNum(4,3);  // az 64

//ugyanez rekurzívan:
/*
powerNum(4,3) -> 4*4*4 -> 4* power(4,2)
powerNum(4,2) -> 4*4 -> 4* power(4,1)
power(4,1) -> 4 */


function power(base:number, exponent: number): number {
    if (exponent == 1) {
        return base;
    } else {
        return base * power(base, exponent -1);
    }
}

console.log(power(4,3); // az 64


