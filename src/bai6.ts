export class Book {
    title: String;
    author: String;
    year: number

    constructor (title: String, author: String, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public displayInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}