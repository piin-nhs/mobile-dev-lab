class Person {
    constructor(public name: string, public age: number) {}
}

export class Student1 extends Person {
    constructor(name: string, age: number, public grade: number) {
        super(name, age);
    }

    getInfo(): string {
        return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

export class Teacher1 extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    getInfo(): string {
        return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}

export class School {
    private students: Student1[] = [];
    private teachers: Teacher1[] = [];

    addStudent(student: Student1): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher1): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        this.teachers.forEach(t => console.log(t.getInfo()));
        this.students.forEach(s => console.log(s.getInfo()));
    }
}