'use-strict';
export{};

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let myToDo: string = 'My todo:\n';
let downloadGames: string = ' - Download games\n';
let diablo: string = ' - Diablo';
let space: string = ' ';

console.log(myToDo + todoText + downloadGames + space + space + space + diablo);