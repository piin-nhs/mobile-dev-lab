"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`Chim ${this.name} thi dang bay`);
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`Ca ${this.name} thi dang boi`);
    }
}
exports.Fish = Fish;
