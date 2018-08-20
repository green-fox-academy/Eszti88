'use strict';
export{};

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
/*for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + 'a';
}
console.log(animals);*/

let newAnimals: string[] = [];

function appendA(inputString: string): string[] {
    for (let i: number = 0; i < animals.length; i++) {
        animals[i] += inputString;
        newAnimals.push(animals[i]);
    }
    return newAnimals;
}

console.log(appendA('a'));
