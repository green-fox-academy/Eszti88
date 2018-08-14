declare function require(path: string): any;
'use strict';
export { };

const fs = require('fs');

const charEncoding = 'utf-8';

//function readFromFile() {
function readFromFile(fileName: string): string {
    try {
        //return fs.readFileSync('hello.txt', charEncoding);
        return fs.readFileSync(fileName, charEncoding);
    } catch (e) {
        console.log(e.message);
        return null;
    }
    // } catch (e) {               // e means error object
    //console.log(e);
}
}

console.log('hello.txt');


//console.log(readFromFile());
/*
Prints out: 
Mark egy isten,
Arnika egy istenno.*/


//************************************************************************************************************

function writeToAFile(fileName: string, data: any): void {
    fs.writeFileSync(fileName, data);
}

writeToAFile('hello.txt', 'hello coffee');

console.log(readFromFile('hello.txt'));


//******************************************************************************************************************

function countChar(char: string): number {
    let result: number = 0;
    const fileContent: string = readFromFile('hello.txt');
    if (fileContent !== null) {
        //fileContent.split('\r\n')    //   split \r\n-nel széttörjük sorokra a tartalmat
        //console.log(fileContent);
        fileContent.split('\r\n').forEach(e => {    //sorokra bont
            e.split('').forEach(elem => {           //betűkre bont
                if (elem === 'a') {
                    result++;
                }
            })
        });
        writeToAFile('result.txt', result)
        return result;
    }
}

console.log(counChar('a'));