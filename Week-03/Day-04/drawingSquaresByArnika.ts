//olyan mint a rainbow, csak nem színes, de négyzetek

a 2 sor kell a fájlból!!4

let size = canvas.width;
let numOfSquares = 100; 

//nonrecursive solution:

function generateSquares(n: number, size: number) {
let size = startSize;
for (let i = 0; i  <numOfSquares; i++) {
    let x = canvas.width / 2 - size /2;
    let y = canvas.height / 2 - size /2;
    ctx.strokeRect(x, y, size, size);
    size = size - 10;
}}

generateSquares(100, canvas.width);

//ez rekurzióval:

function recursiveSquares(size: number) {
    if (size > 0) {
        let x = canvas.width / 2 - size /2;
        let y = canvas.height / 2 - size /2;
        ctx.strokeRect(x, y, size, size);
        recursiveSquares(size -10); // ha többet vonok ki, nagyobb lesz a "sorköz"
    }
}

generateSquares(canvas.width);

// egyre nagyobb sorközök:
function recursiveSquares(size: number, distance: number) {
    if (size > 0) {
        let x = canvas.width / 2 - size /2;
        let y = canvas.height / 2 - size /2;
        ctx.strokeRect(x, y, size, size);
        let newSizeNum = size -distance
        let newDistance = distance -25
        recursiveSquares(newSizeNum, newDistance); 
    }
}

generateSquares(canvas.width, 100); 
/*600 px szeles negyzet, a kövi negyzet 100 px-re van
500 px szeles negyzet, a kövi 75 px-re van
425 px, a kövi 50px-re van, mindig 25-tel csökken
