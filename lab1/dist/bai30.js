"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Teacher1 = exports.Student1 = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student1 extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getInfo() {
        return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
exports.Student1 = Student1;
class Teacher1 extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    getInfo() {
        return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}
exports.Teacher1 = Teacher1;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        this.teachers.forEach(t => console.log(t.getInfo()));
        this.students.forEach(s => console.log(s.getInfo()));
    }
}
exports.School = School;
