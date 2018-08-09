'use strict';
export { };

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;


function containsSeven(listToCheck: number[]) {                  // többsoros választ ad egysoros helyett
    let containsSeven: boolean = false;
    //let listWithCheckedNumbers: number[] = [];
    for (let i: number = 0; i < listToCheck.length; i++) {
        if (listToCheck[i] == 7) {
            containsSeven = true;
        }
    }
    if (containsSeven) {
        return "Hoooooray";
    } else {
        return "Nooooooooo";
    }
} 
