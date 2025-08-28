class Animal2 {
    protected makeSound(): void {
        console.log("Some generic animal sound...");
    }

    public speak(): void {
        this.makeSound(); 
    }
}

export class Dog2 extends Animal2 {
    protected makeSound(): void {
        console.log("Woof! Woof!");
    }
}

export class Cat2 extends Animal2 {
    protected makeSound(): void {
        console.log("Meow! Meow!");
    }
}


