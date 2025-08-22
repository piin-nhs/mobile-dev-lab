"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    get _name() {
        return this.name;
    }
    set _name(ten) {
        this.name = ten;
    }
}
exports.User = User;
