'use strict';
export{};

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ];

  // Who has got more than 4 candies

  function atLeast4Candies(inputList: object[]) {
      let myArray: string[] = [];
      inputList.forEach(elem => {
          if (elem["candies"] > 4) {
              myArray.push(elem["name"]);
          }
      })
      return myArray;
  }

  console.log(atLeast4Candies(students));

  //How many candies do they have on average

  function candyCounter(input: any[]): number {
      let sum: number = 0;
      for (let i: number = 0; i < input.length; i++) {
          sum = sum + input[i].candies;
      }
      let average: number = sum / input.length;
      return average;
  }
  console.log(candyCounter(students));
  



  