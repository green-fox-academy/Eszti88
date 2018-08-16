// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(base: number, exponent: number): number {
    if (exponent === 1) {
        return base;
    } else {
        return base * powerN(base, exponent - 1);
    }
}

console.log(powerN(3, 2));

/*function powerNum(base:number, exponent: number): number {
    let result: number = 1;
    for (let i: number = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(powerNum(4,3));*/