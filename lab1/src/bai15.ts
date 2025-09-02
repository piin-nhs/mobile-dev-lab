export class Book1 {
    constructor(
        public title: string,
        public author: string
    ) {}
}

export class User1 {
    constructor(
        public name: string
    ) {}
}

export class Library {
    private books: Book1[] = [];
    private users: User1[];

    constructor(users: User1[]) {
        this.users = users;
    }

    addBook(book: Book1): void {
        this.books.push(book);
    }

}
