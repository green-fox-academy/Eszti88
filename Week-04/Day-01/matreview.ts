//a vizsgában lehet hasonló feladat:

//class per fájl, hogy ne legyen 1000 soros fájl, hanem legyen több rövid, amik átláthatóak

'use strict';

export class Person {           //export: másik fájlból is elérhető a class
    protected name: string;
    protected age: number;
    protected gender: string;           //nem private, így máshol is használható, de még mindig nem nyilvános

    constructor(name/*?*/: string = 'Jane Doe', age: number = 30, gender: string = 'female') {  //default értékeket adok meg, hogy ? után ne kelljen if-else-t használnom     
       /* if (gender !== 'male' || gender !== 'female') {
            throw new Error('')
        } */
        this.gender = gender;
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`BACKTICK hi I amdollar{this.name}, I am a ...yo ...'`);        
    }
    
    getGoal() {
        console.log('my goal is: live for the moment');        
    }
}}

let person1: Person = new Person();
// person1.getGoal();               és a student.ts-t lefuttatásakor mindkét sor megjelenik
let person2: Person = new Person('Arnika', 30, 'female');

//új fájlba:
import {Person} from "./person";

export class Student extends Person {
    private prev org: string;
    private skippedDays: number;

    constructor(name, age, gender, prevOrg + típusokat meghatározni mindig) {
        /*szuperhívás azért kell, hogy a korábbi konstruktor is meg legyen hívva. A fölöttem lévő osztály konstruktorát hívja meg */
       /* super();        // az üres defaultot hívja meg
        super('mark', 20, 'male'); //felülírom a korábbi defaultot*/
        super(name, age, gender);
        this.prevOrg = prevOrg;
        this.skippedDays = 0;       // ha jön egy új diák, ez a szám alapból 0 lesz. osztályon belül definiáljuk.

    }
    
    getGoal() {
        console.log('Be a junior software developer');        
    }

    introduce() {
        console.log(`BACKTICK hi I amdollar{this.name}, I am a ...yo ...' from prev org who skipped daysfrom the course`);        
    }
}

let student1: Student = new Student();

student1.getGoal();

//új fájlba:
import {Person} from "./person";

let person1: Person = new Person();
let student1: Student = new Student();      //beimportálja őket, tudok velük műveleteket végezni

student1.introduce();

//másik bemutatkozási mód, hogy ne copyzzam a personból, mint az előbb

let person1: Person = new Person();
let student1: Student = new Student(msWriteProfilerMark, 30, male);

introduce() {
    super.introduce
    console.log(`BACKTICK  from prev org who skipped daysfrom the course`);          
}











