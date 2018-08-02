// Print the Body Mass Index (BMI) if mass in kg is 81.2 and height in m is 1.78

// A standard BMI calculator offers the following soultion: your body mass in kg must be divided with your height x height


let massInKg : number = 81.2;
let heightInM:  number = 1.78;
let heightInSquareMeter : number = heightInM * heightInM;
let BMIString : string = 'BMI is ';
let BMIResult : number = massInKg / heightInSquareMeter;

console.log ( BMIString + BMIResult );


