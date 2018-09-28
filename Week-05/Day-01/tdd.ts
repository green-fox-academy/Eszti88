TDD - Test Driven Development

1. Failed test
2. Add minimal satisfying code 
3. Refactor - letisztázás, átalakítás

// (teszt csoport: a teszterek. Tóth Eszter, Takács Eszter, stb.)

Ez egy deduktív gondolkozási mód, ahol a végeredményből következtetek az előzményekre. -Ádám

tests.ts-be:

'use strict';

import { test } from 'tape';
import indexof from...

test("név, mint is it one?", t => {
    let array = [1,2,3,4,5]
    let numbertofind = 2;

    let result = indexof(array, numtoFind);

    t.equal(result, 1)
    t.end();
})

index.ts-BeforeUnloadEvent

export default function indexof(array: Array < number, numtofind: number): number {
    return 0;               Failed test
    return 1;               második lépés, ez már lefut
}

---első kör vége---

test.ts-be 

test("név, mint is it one?2", t => {
    let array = számok,
    let numbertofind = 4

    let result = indexof(array, numtoFind);

    t.equal(result, 2)
    t.end();
})

testbe

exp def func ...
for loop i < array.lenght
if array[i] === numtofind, akkor return 1