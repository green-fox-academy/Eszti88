let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number =0; i < lineCount; i++) {
    if (i == 0) {
        console.log('   *');        
    } if (i == 1) {
        console.log('  ***');        
    } if (i == 2) {
        console.log(' *****');        
    } if (i == 3) {
        console.log('*******');        
    }
}