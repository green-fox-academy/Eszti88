import { BlogPost } from "./blog-post";

'use strict';

/*Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost*/

class Blog {
  private blogPosts: BlogPost[];

  constructor() {
    this.blogPosts = [];
  }

  public add(inputBlogPost: BlogPost) {
    this.blogPosts.push(inputBlogPost);
  }

  public delete(inputNumber: number) {
    for (let i: number = 0; i < this.blogPosts.length; i++) {
      if (i === inputNumber) {
        this.blogPosts.splice(inputNumber, 1);
      }
    }
    return this.blogPosts;
  }

  public update(inputNumber: number, inputBlogPost: BlogPost) {
    for (let i: number = 0; i < this.blogPosts.length; i++) {
      if (i === inputNumber) {
        this. blogPosts.splice(inputNumber, 1, inputBlogPost);
      }
    }
    return this.blogPosts;
  }
}