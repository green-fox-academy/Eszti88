'use strict';

// if a is even increment out by one

let a: number = 24;
let out: number = 0;

if (a % 2 == 0) {
    out = out + 1;
}

console.log(out);


// Sweet, less or more...

let b: number = 13;
let out2: string = '';
if (10 < b && b < 20) {
    out2 = "Sweet!";
} else if (b < 10) {
    out2 = "Less!";
} else if (b > 20) {
    out2 = "More!";
}

console.log(out2);

// c=123, credits=100, bonus=false

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits >= 50 && !isBonus) {   // isBonus == false helyett !, mert a Boolean kiértékelődik
    c -= 2;
} else if (credits < 50 && !isBonus) {
    c -= 1;
} if (isBonus) {
    c = c;
}

console.log(c);


let d: number = 8;
let time: number = 120;
let out3: string = '';

if (d % 4 == 0 && time <= 200) {
    console.log("check");
} else if (time > 200 && time > 200) {
    console.log("Time out");
} else {
    console.log("Run Forest Run");
}