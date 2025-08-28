export class Animal {
    constructor(public name: string) {}
}

export class Dog extends Animal {
    bark(): void {
        console.log(`Cho ${this.name} keu Woof!`);
    }
}

export class Cat extends Animal {
    meow(): void {
        console.log(`Meo ${this.name} keu Meow!`);
    }
}
