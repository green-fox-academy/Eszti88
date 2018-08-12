'use strict';
export{};

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival
export = securityCheck;

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(inputArray: object[]) {
  let whoCanEnter: string[] = [];
  let watchlist: string[] = [];
  let securityAlcoholLoot: number = 0;
  for (let i: number = 0; i < inputArray.length; i++) {
    if ( inputArray[i]["guns"] === 0 && (inputArray[i]["alcohol"] === 0)) {
      whoCanEnter.push(inputArray[i]["name"]);
    } else if (inputArray[i]["guns"] !== 0) {
      watchlist.push(inputArray[i]["name"]);
    } else if (inputArray[i]["alcohol"] !== 0) {
      securityAlcoholLoot += inputArray[i]["alcohol"];
      inputArray[i]["alcohol"] = 0;
      whoCanEnter.push(inputArray[i]["name"]);
    } else {}
  };
  return console.log('They can enter: ${whoCanEnter'}
They are on the watchlist: ${watchlist}
Alcohol amount: ${securityAlcoholLoot});  
}

securityCheck(queue);