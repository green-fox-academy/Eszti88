'use strict';
export{};

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance (inputList: string[]) {
    let nameAndBalance: string[]= [];
    for (let i: number = 0; i < inputList.length; i++) {
        console.log(inputList[i]["clientName"], inputList[i]["balance"]);        
    }
}
(getNameAndBalance(accounts));


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
/*export = {
  getNameAndBalance,
  transferAmount,
  accounts
};*/

function transferAmount(database, fromAccount, toAccount, amountOfMoney) {
  let doesItExistNumber: number = 0;
  database.forEach (function(elem) {
    if (elem.accountNumber == fromAccount || elem.accountNumber == toAccount) {
      doesItExistNumber += 1;
    }
  });
  if (doesItExistNumber < 2) {
    console.log('404 - account not found');    
  }
  else {
    database.forEach (function(elem) {
      if (elem.accountNumber == fromAccount) {
        elem.balance -= amountOfMoney;
      }});
      database.forEach (function(elem) {
        if (elem.accountNumber == toAccount) {
          elem.balance += amountOfMoney;
        }});
        console.log(accounts);        
  }
}
getNameAndBalance(11234543);
transferAmount(accounts, 43546731, 23456311, 500.0);



