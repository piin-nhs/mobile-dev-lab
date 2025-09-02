interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

export class Bird implements Flyable {
    constructor(public name: string) {}

    fly(): void {
        console.log(`Chim ${this.name} thi dang bay`);
    }
}

export class Fish implements Swimmable {
    constructor(public name: string) {}

    swim(): void {
        console.log(`Ca ${this.name} thi dang boi`);
    }
}
