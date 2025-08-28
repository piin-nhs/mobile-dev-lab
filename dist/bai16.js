"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    constructor(value) {
        this.value = value;
    }
    get _value() {
        return this.value;
    }
    set _value(newValue) {
        this.value = newValue;
    }
}
exports.Box = Box;
