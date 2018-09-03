'use strict';
export{};

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
let newAnimals: string[] = [];

for (let i: number = 0; i < animals.length; i++) {
  animals[i] += 'a';
  newAnimals.push(animals[i]);
}

console.log(newAnimals);