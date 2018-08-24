declare function require(path: string): any;
'use strict';
export{};

class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}

function initializeDominoes(): Domino[] {
    let dominoes: any[] = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function printDominoes(dominoes: Domino[]) {
    dominoes.forEach(function(value) {
        console.log(value);        
    })
}

let dominoes = initializeDominoes();

/* You have the list of Dominoes
Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
eg: [2, 4], [4, 3], [3, 5] ... */

function sort(inputArray) {
    let sortedDominoes: any[] = [inputArray[0]];
    for (let i: number = 0; i < inputArray.lenght; i++) {
        for (let j: number = 0; j < inputArray.lenght; j++) {
            if (sortedDominoes[i].value[1] === inputArray[j].value[0]) {
                sortedDominoes.push(inputArray[j]);
            }
        }
    }
    dominoes = sortedDominoes;
}

sort(dominoes);
printDominoes(dominoes);
