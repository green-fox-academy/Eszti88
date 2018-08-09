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

// How many candies are owned by students:  
  
function candyCounter(input: object[]) {
    let sum: number = 0;
    for (let i: number = 0; i < input.length; i++) {
        sum = sum + input[i]["candies"];      
    } 
    return sum;
}

console.log(candyCounter(students));

// Sum of the age of people who have lass than 5 candies

function sumOfAge(listOfObjects: Object[]) {
    let sum: number = 0;
    listOfObjects.forEach(elem => {
      if (elem["candies"] < 5) {
        sum += elem["age"];
      }
    });
    return sum;
  }
  
  console.log(sumOfAge(students));
 

//candyCounter([{name: 'Theodor', age: 3, candies: 2}])

// With Márk's help:
/* function candyCounter(input: object[]) {

   prints out who has how many candies

    for (let i: number = 0; i < input.length; i++) {
        console.log(input[i]['name'], input[i]['candies']); } */
