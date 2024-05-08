"use strict";
// You are given an object representing a book with properties title (string),
// author (string), and publishedYear (number). Use type alias for declaring
// the object. Write a TypeScript function called isRecentBook that takes
// this book object as input and determines if the book was
// published in the last 5 years.
{
    const book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };
    const isRecentBook = (book) => {
        const pychoy = new Date().getFullYear();
        return pychoy - book.publishedYear <= 5;
    };
    let lala = isRecentBook(book1);
    console.log(lala);
}
