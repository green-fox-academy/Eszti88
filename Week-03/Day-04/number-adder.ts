// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n + numberAdder(n - 1);
    }
}

console.log(numberAdder(5));

// add(5) -> 5 + add(4)
// add(4) -> 4 + add(3)
// add(3) -> 3 + add(2) 
// add(2) -> 3 + add(1)
// add(1) -> 1

/* for loopal 

let n: number = 5;
for (let i: number = 1; i <= 5; i++) {
    console.log(i);    
} */