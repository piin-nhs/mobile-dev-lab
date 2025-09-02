"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat2 = exports.Dog2 = void 0;
class Animal2 {
    makeSound() {
        console.log("Some generic animal sound...");
    }
    speak() {
        this.makeSound();
    }
}
class Dog2 extends Animal2 {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
exports.Dog2 = Dog2;
class Cat2 extends Animal2 {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
exports.Cat2 = Cat2;
