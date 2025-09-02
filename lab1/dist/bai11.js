"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    bark() {
        console.log(`Cho ${this.name} keu Woof!`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    meow() {
        console.log(`Meo ${this.name} keu Meow!`);
    }
}
exports.Cat = Cat;
