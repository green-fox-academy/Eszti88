'use strict';
export { };

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let mySweets: string[] = [];

function sweets(listToChange: any[]): string[] {
    let listWithStringifiedObjects: string[] = [];
    for (let i: number = 0; i < listToChange.length; i++) {
        if (listToChange[i] == 2) {
            listWithStringifiedObjects.push("Croissant");            //console.log helyett listWithStringifiedObjects.push
        } else if (listToChange[i] == false) {
            listWithStringifiedObjects.push("Ice cream");            
        } else {
            listWithStringifiedObjects.push(listToChange[i]);            
        }
    }
    return listWithStringifiedObjects;
}

console.log(sweets(shopItems));
export = sweets;