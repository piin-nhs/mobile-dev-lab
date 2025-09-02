"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.User1 = exports.Book1 = void 0;
class Book1 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
exports.Book1 = Book1;
class User1 {
    constructor(name) {
        this.name = name;
    }
}
exports.User1 = User1;
class Library {
    constructor(users) {
        this.books = [];
        this.users = users;
    }
    addBook(book) {
        this.books.push(book);
    }
}
exports.Library = Library;
