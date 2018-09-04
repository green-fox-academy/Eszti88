'use strict';
export{};

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function hasMoreThan4Candies(inputArray: any[]): string[]{
  let studentList: string[] = [];

  inputArray.forEach(elem => {
    if (elem['candies'] > 4) {
      studentList.push(elem['name']);
    }
  });
  return studentList;
}

console.log(hasMoreThan4Candies(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyInAvg(inputArray: any[]): number {
  let average: number = 0;
  let candies: number = 0;
  let amountOfStudents: number = 0;
  for (let i: number = 0; i < inputArray.length; i++) {
    candies += inputArray[i]['candies'];
    amountOfStudents++;
  }
  average = candies / amountOfStudents;
  return average;
}

console.log(candyInAvg(students));
