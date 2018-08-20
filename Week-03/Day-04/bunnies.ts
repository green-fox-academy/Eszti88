// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively 
// (without loops or multiplication).

function earCounter(numOfBunnies: number): number {
    if (numOfBunnies === 1) {
        return 2;
    } else {
        return 2 + earCounter(numOfBunnies - 1);
    }
}

console.log(earCounter(8));
