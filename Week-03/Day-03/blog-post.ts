declare function require(path: string): any;
'use strict';
export{};

/*Create a BlogPost class that has
an authorName
a title
a text
a publicationDate*/

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationmDate: string;
}

/*Create a few blog post objects:
- "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
- Lorem ipsum dolor sit amet.*/

const blogPostObject1 = new BlogPost();
blogPostObject1.authorName = ' John Doe';
blogPostObject1.title = 'Lorem Ipsum';
blogPostObject1.text = 'Lorem ipsum dolor sit amet.';
blogPostObject1.publicationmDate = '2000.05.04';

console.log(blogPostObject1);

/*"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.*/

const blogPostObject2 = new BlogPost();
blogPostObject2.authorName = 'Tim Urban';
blogPostObject2.title = 'Wait but why';
blogPostObject2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
blogPostObject2.publicationmDate = '2010.10.10';

console.log(blogPostObject2);


