// rekurzió

//függvényből nem csak más függvényt lehet hívni, hanem önmagát is, ezt jó tudni, és jó egy másféle 
//gondolkodást látni. Bizonyos nyelvekben nincs loop, ilyenkor hasznos a faktoriális és a rekurzivitás.

function hello() {
    console.log("hello");
    hello();    
}

hello();

//error: maximum call stack size exceeded  - nem fut a végtelenségig a program

function hello(n: number) {
    console.log("hello" + n);
    hello(n + 1);    
}

hello(0);

// a hello + számot tizenpárezerszer kiírja egy más alá

function addNums(n: numnber): number {
    let sum: num = 0;
    for (let i: number = 0; i <= n; i++) {
        sum +=1;
    }
    return sum;
}

let answer: number;
answer = addNums(3);

console.log(answer);   // a végeredmény 6

// add(10): 10+9+8+7+6+5+4+3+2+1 = 10+add(9)
// add(9): 9+8+7...+1

//ugyanez rekurzióval:
function addNums(n: numnber): number {
    if (n == 1) {
        return 1;
    } else {
    return n + addNums(n - 1);
    }
}

let answer: number;
answer = addNums(3);

console.log(answer);

//neg.számra:
function addNums(n: numnber): number {
    if(n < 1) {
        throw new Error('cannot use neg num';)
    }
    else if (n == 1) {
        return 1;
    } else {
    return n + addNums(n - 1);
    }
}

let answer: number;
answer = addNums(3);

console.log(answer);   //hibaüzit íratok ki, mert neg számra nem használható



