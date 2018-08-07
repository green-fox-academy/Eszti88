'use strict';
export { };

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

/* function candyCounter(input: object[]) {

   prints out who has how many candies

    for (let i: number = 0; i < input.length; i++) {
        console.log(input[i]['name'], input[i]['candies']); } */

function candyCounter(input: object[]) {
    for (let i: number = 0; i < input.length; i++) {
        console.log();
        
    }
}

        console.log(input);   



candyCounter(students);
//candyCounter([{name: 'Theodor', age: 3, candies: 2}])