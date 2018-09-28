declare function require(path: string): any;
'use strict';
export { };

// Read the content of matrix.txt and write the result of the added numbers to a new file.

const fs = require('fs');
const charEncoding = 'utf-8';

//megnyitom a fájlt , olvasva a tartalma vagy hibaüzenet
function fileRead(fileName: string): string {
  try {
    let fileContent: string = fs.readFileSync(fileName, charEncoding);
    return fileContent;
  } catch {
    console.log('Sorry I can\'t do that...');
    return null;
  }
}

let fileContent = fileRead('matrix.txt');
//console.log(fileContent);

function writeToFile(fileName: string, data: any): void {
  fs.writeToFile('result.txt', myNum);
}


//kivenni a fölösleges karaktereket, csak a számok maradjanak
let myNum: number = 0;

function addNumbers(): any {
  let lines: string[] = fileContent.split('\r\n');
  let words: string[][] = lines.map(elem => {
    return elem.split(' ');
  })
  console.log(words);

  for (let i: number = 0; i < words.length; i++) {
    for (let j: number = 0; j < words[i].length; j++) {
      myNum += parseInt(words[i][j]);     //számot csinál stringből
           
    }
  }
  console.log(myNum);
  
}
addNumbers();

//console.log(addNumbers('matrix.txt'));
