'use strict';

export class Thing {
  protected name: string;
  protected completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }

  public giveName() {
    return this.name;
  }

  public giveX() {
    if (this.completed) {
      return 'X';     
    } else {
      return ' ';      
    }
  }
}
