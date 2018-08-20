// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication)

function earAndFootCounter(numberOfBunnies: number): number {
    if (numberOfBunnies === 1) {
        return 2;
    } else if (numberOfBunnies % 2 !==0) {
        return 2 + earAndFootCounter(numberOfBunnies - 1);
    } else {
        return 3 + earAndFootCounter(numberOfBunnies -1);
    }
}

console.log(earAndFootCounter(3)); 

/*
nyuszi 1    2 fül
nyuszi 2    3
nyuszi 3    2
nyuszi 4    3 */
