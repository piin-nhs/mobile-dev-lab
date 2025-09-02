"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat1 = exports.Dog1 = exports.Animal1 = void 0;
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.Animal1 = Animal1;
class Dog1 extends Animal1 {
    sound() {
        console.log(`${this.name} barks: Woof!`);
    }
}
exports.Dog1 = Dog1;
class Cat1 extends Animal1 {
    sound() {
        console.log(`${this.name} meows: Meow!`);
    }
}
exports.Cat1 = Cat1;
