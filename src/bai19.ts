export class Animal1 {
    constructor(public name: string) {}

    sound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

export class Dog1 extends Animal1 {
    sound(): void {
        console.log(`${this.name} barks: Woof!`);
    }
}

export class Cat1 extends Animal1 {
    sound(): void {
        console.log(`${this.name} meows: Meow!`);
    }
}

