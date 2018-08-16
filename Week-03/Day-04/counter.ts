// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number): void {
    if (n > 0) {
        console.log(n); 
        counter(n-1);
    } else {
        console.log(n);        
    }
}

counter(5);

/* for looppal
let n: number = 5;
for (let i: number = 5; i >= 0; i--) {
         console.log(i);
}*/