"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
