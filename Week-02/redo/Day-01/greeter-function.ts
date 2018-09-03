'use strict';
export{};

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let name: string = 'Greenfox';

function greet(specialCase: string = 'Visitor') {
  console.log('Greetings, dear ' + specialCase);  
}

// ÁRNIKA, így miért nem működik?
/*function greet(inputString: string) {
  if (!name) {
    console.log('Greetings, dear Visitor!');
  } else {
    console.log('Greetings, dear ' + name);
  }  
}*/

greet(name);
greet();