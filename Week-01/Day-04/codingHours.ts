'use strict';

// An average GF attendeecodes a lot: 6 hours daily, and a semester is 17 weeks long.

// If an attendee codes only on workdays, how many hours are spent with coding in a semester?

// If the average working hours are 52 weekly, how much is the percentage of the coding hours in a semester?


// Hours spent with coding

console.log(6 * 5 * 17);

// Percentage

console.log(((6 * 5 * 17) / (52 * 17)) * 100);



// Repeating the task in a different way


let dailyCodingHours: number = 6;
let totalAmountOfWeeks: number = 17;
let amountOfWorkingDaysAWeek: number = 5;

console.log(dailyCodingHours * amountOfWorkingDaysAWeek * totalAmountOfWeeks);

let averageWorkingHoursWeekly: number = 52;
let multiplier: number = 100;

console.log(((dailyCodingHours * amountOfWorkingDaysAWeek) / averageWorkingHoursWeekly) * multiplier);
