// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let x: number = 1; x < 101; x++) {
    if (x % 3 == 0) {
        console.log('Fizz');        
    } else if (x % 5 == 0) {
        console.log('Buzz');        
    } else if ((x % 3 == 0;) && (x % 5 == 0)) {
        console.log('FizzBuzz');        
    }
}