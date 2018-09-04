'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function candyCounter(inputArray: any[]): number {
  let candies: number = 0;
  for (let i: number = 0; i < inputArray.length; i++) {
    candies += inputArray[i]['candies'];
  }  
  return candies;
}

console.log(candyCounter(students));

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumOfAge(inputArray: any[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < inputArray.length; i++) {
    if (inputArray[i]['candies'] < 5) {
      sum += inputArray[i]['age'];
    }
  }
  return sum;
}

console.log(sumOfAge(students));
