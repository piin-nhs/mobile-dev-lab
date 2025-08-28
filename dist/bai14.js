"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} lam viec...`);
    }
}
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} thi quan ly nhom`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    writeCode() {
        console.log(`${this.name} thi dang viet code`);
    }
}
exports.Developer = Developer;
