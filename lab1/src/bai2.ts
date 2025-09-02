import { Person } from "./bai1";

export class Student extends Person{
    grade: number;

    constructor (name: String, age: number,grade: number ){
        super(name, age);
        this.grade = grade;
    }

    public displayInfoAll(): void {
        this.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}