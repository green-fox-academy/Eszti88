// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

'use strict';
export{};

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5];

if (secondList.lenght > firstList.length) {
    console.log("The second list has more elements than the first one");    
} else {
    console.log("The second list has less elements than the first one");    
};
