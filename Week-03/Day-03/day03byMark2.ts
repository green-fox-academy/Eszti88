class Student {
    //statikus propertyk és methodok lehetnek
    private static greeting: string = 'hello from class coffee';
    private name: sting;
    private age: number;
    private hasWeapon: boolean;
    private hasAlcohol: boolean;
    constructor(name: string, age: number, hasAlcohol: boolean, hasWeapon: boolean) {
        this.name = name;
        this.age = age;
        this.hasAlcohol = hasAlcohol;
        this.hasWeapon = hasAlcohol;
    }

    sayHi() {
        //console.log('hi');  
        Student.sayHiToClass('hi' + this.name)      
    }
    static sayHiToClass() {
        console.log(this.greeting);      
        
    /*sayHiToClass() {
        console.log(greeting);        
    }*/
    }
}

let markNameless= {name: 'Mark', age: 18, hasWeapon: false, hasAlcohol: false};
let markStudent: Student = new Student('Mark', 18, false, false);
let arnikaStudent: Student = new Student('Arnika', 18, false, false);

console.log(markNameless);  // mit ír ki?
console.log(MarkStudent);   // mit ír ki?
console.log(arnikaStudent);


markStudent.sayHi();
Student.sayHiToClass();




