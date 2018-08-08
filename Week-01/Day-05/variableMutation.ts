'use strict';

// a=3, make it bigger by 10

let a: number = 3 + 10;

console.log(a);

// b=100, make it smaller by 7

let b: number = 100 - 7;

console.log(b);

// c=44, double its value

let c: number = 44 * 2;

console.log(c);

// d=125, divide its value by 5

let d: number = 125 / 5;

console.log(d);

// e=8, what is its cube?

let e: number = 8 * 8 * 8;

console.log(e);

// f1=123, f2=345, tell if f1 is bigger than f2 in boolean

let f1: number = 123;
let f2: number = 345;
let x: boolean = false;
x = (f2 > f1);

if (f2 > f1) {
    x = true;
}

console.log(x);

// g1=350, g2=200, tell if double of g2 is bigger than g1 in boolean

let g1: number = 350;
let g2: number = 200;
let g2Double: number = g2 * 2;
let y: boolean = false;
y = (g2Double > g1);

console.log(y);

// h=1357988018575474, tell if h has 11 as a divisor as a boolean

let h: number = 1357988018575474;

if (h % 11 == 0) {
    console.log("ostya");
} else {
    console.log("nemostya");
}

//i1=10 and i2=3, tell if i1 is higher than i2 squared and smaller than i2 cubed as a boolean

let i1: number = 10;
let i2: number = 3;
let i2Squared: number = i2 * i2;
let i2Cubed: number = i2 * i2 * i2;

if (i1 > i2Squared && i1 < i2Cubed) {
    console.log("i1 is higher than i2 squared and smaller than i2 cubed");
} else {
    console.log("i1 is not higher than i2 squared and  not smaller than i2 cubed");
}

// j=1521, tell if j is dividable by 3 or 5 as a boolean

let j: number = 1521;
 if (j % 3 ==0 && j % 5 ==0) {
     console.log("ostyák");
} else if (j % 3 ==0) {
    console.log("3ostya");    
} else if (j % 5 ==0) {
    console.log("5ostya");
} else {
    console.log("nemostyák");
}

// k= apple, fill the k variable with its content 4 times

let k: string = "AppleAppleAppleApple";

console.log(k);
































