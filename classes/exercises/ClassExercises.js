// const { extensions } = require("vscode");

// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discardBook) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discardBook = discardBook;
    }
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discardBook) {
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discardBook);
        this.title = '	Pride and Prejudice';

    }
    dispose(currentYear){
        if (currentYear-this.copyrightDate > 5) {
            this.discardBook = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate,ISBN, pages, timesCheckedOut, discardBook) {
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discardBook);
    }
    dispose(){
        if (this.timesCheckedOut > 100) {
            this.discardBook = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let bookNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '111111111111', 432, 32, 'No');

let bookManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');



// Code exercises 4 & 5 here:
bookManual.dispose(new Date().getFullYear);
console.log(bookManual.discardBook);

bookNovel.checkout(5);
console.log(bookNovel.timesCheckedOut);