'use strict';
export{};

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(givenNumber: number) {
    let myNum: number = 1;
    for (let i = 1; i < givenNumber; i++) {
        // MULTIPLICATION! i should be equal to 1 at least!!!
        myNum = myNum * i;
        
    }
    return myNum
}

console.log(factorio(8));

