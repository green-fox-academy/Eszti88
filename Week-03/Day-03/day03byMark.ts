/* //ellpise1
let xCenterCoord1: number;
let yCenterCoord1: number;
let widthOfEllipse1: number;
let heightOfEllipse1: number; */

class Ellipse {
    // properties:
    xCenterCoord: number;
    yCenterCoord: number;
    height: number;             //nem kell a névbe az ellipszis, mert az már az osztály neve
    width: number;
    // constructor: mint egy sablon, amiben megmondom, hogy mi legyen. építőelem, 
    // ami az ellipszist ellipszissé teszi. függvény (function), amibe belerakjuk a cuccokat
    // constructor(paraméter, és mivel legyen egyenlő)
    // constructor() {}  // () meghívja ennek a zárójelét: let first: Ellipse = new Ellipse();
    //constructor:
    constructor( xCenterCoordVALAMIMAS: number 
        yCenterCoord: number,
        height: number;
    width: number) {
        // this helyére berakja a firstöt, mindig önmagára gondol, ha őt írtad oda
        this.xCenterCoord = xCenterCoordVALAMIMAS;
        this yCenterCoord = yCenterCoord;
        this.height = height;
        this width = width;
    }

//other methods
//const draw = (params) => {}
name() {
    console.log(this);   // mindent kiír
}

/*let first: Ellipse = null;
first = new Ellipse(); */
// let first: Ellipse = new Ellipse(); // ő az új bevezetett típusom, mint a number, a string, a boolean, stb
let first: Ellipse = new Ellipse(100, 100, 51.5, 50);

//console.log(first); // kiírja a nevet, és a hozzá tartozó értékeket, de inkább így hívd meg:
first.name();

//DEFAULT

constructor( xCenterCoord: number = 100,
    yCenterCoord: number = 100,
    height: number = 51.5,
    width: number = 50) {
    this.xCenterCoord = xCenterCoordVALAMIMAS;
    this yCenterCoord = yCenterCoord;
    this.height = height;
    this width = width;
}
let first: Ellipse = new Ellipse(null, null, null, 50);    //mindig felülírja százra??

console.log(first); 

/* yCenterCoord1 = 100;
xCenterCoord1 = 100;
widthOfEllipse1 = 50;
heightOfEllipse1 = 51.5; */

/* first.xCenterCoord = 100;
first.yCenterCoord = 100;
first.height = 51.5;
first.width = 50; */

/* //ellipse2
let xCenterCoord2: number;
let yCenterCoord2: number;
let widthOfEllipse2: number;
let heightOfEllipse2: number; */

//console.log(first.xCenterCoord);   //prints out: error, nem jó a let first: Ellipse = null

//zárójelen belül methodnak hívjuk, kint functionnak

//több konstruktor lehet, ha van default érték

/*******************************************************************************************************
private: hogy kívülről nehogy megváltoztassam. Strukturáltság miatt van. Mire jó? Ha nem akarod, 
hogy máshol megváltoztassák, és kívülről nem mindig látható.

changeXCoord(newXCoord: number) {
    this.xCoordCenter = newXCoord   //még hozzáfér, mert classon belül van
}
first.changeXCoord(6546545468454);

a belső értékek általában private. mindig minden annyira elérhető, amennyire a működéshez szükséges
private mindig csak a property, a class nem lehet az */

//let sum: number = first.xCenterCoord + first.yCenterCoord;   //szorosan hozzá kell tartozzon a class-hez, szóval let sum helyett ezt kell:
sumOfCoordinates() {
    return this.xCenterCoord + this.yCenterCoord;
}

