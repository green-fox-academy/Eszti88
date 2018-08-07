let student = {
    name: "Eszti",
    className: "Coffee",
    age: 30,
    pets: ["cica", "kutya"]
};

let isStudentHavePets: boolean = studnet.hasOwnProperty("pet");
console.log(isStudentHavePets);                                     /* true vagy false */

console.log(student.pet[2]);

console.log(student.pet["cica"]);



let myClass: object[] = [                       /* több object létrehozása egy tömbön belül */
    {
        name: "Bela",
        age: 20
    },
    {
        name: "Anna",
        age: 23
    }
];

/* Anna életkora */
console.log(myClass[1].["age"]);        // Prints out: 23 


/* a string karakterek tömbjeként is felfogható */

let myName: string = "Arnika";

myName.concat(" hello");               /* új tömböt másik tömbhöz */






