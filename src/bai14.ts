 class Employee {
    constructor(public name: string, public salary: number) {}

    work(): void {
        console.log(`${this.name} lam viec...`);
    }
}

export class Manager extends Employee {
    manageTeam(): void {
        console.log(`${this.name} thi quan ly nhom`);
    }
}

export class Developer extends Employee {
    writeCode(): void {
        console.log(`${this.name} thi dang viet code`);
    }
}


