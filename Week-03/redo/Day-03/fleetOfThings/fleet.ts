'use strict';

import { Thing } from "./thing";

export class Fleet {
    protected things: Thing[];

    constructor() {
        this.things = [];
    }

    public add(thing: Thing) {
        this.things.push(thing);
    }

    public print() {
      for (let i: number = 0; i < this.things.length; i++) {
        console.log(`${i + 1}. [${this.things[i].giveX()}] ${this.things[i].giveName()}`);        
      }
    }
}
