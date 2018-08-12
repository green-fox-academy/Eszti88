'use strict';
export{};

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

let newString:string [] = []; 

function makingMatches(stringInput1, stringInput2) {    // a newStringhez adom a girls 1. elemét, majd a boys 1. elemét, majd ....
    
    newString.push(stringInput1[0]);
    newString.push(stringInput2[0]);

    for (let i: number = 0; i < Math.min(stringInput1.length, stringInput2.length); i++) { //a rövidebb stringet fogja venni
        newString.push(stringInput1[i]);
        newString.push(stringInput2[i]);
        
    }

} makingMatches(girls, boys);

console.log(newString);


/* let student: object =  {name: "MArk", age: 18, cat: false, dollaz: 15168784}
let newStudent: object = student
console.log(student)
student['name'] = 'nemMark'
console.log(student)
console.log(newStudent); */





