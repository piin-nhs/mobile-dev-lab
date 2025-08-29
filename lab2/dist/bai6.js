"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise1 = promise1;
exports.promise2 = promise2;
exports.promise3 = promise3;
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Result 1"), 1000);
    });
}
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Result 2"), 2000);
    });
}
function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Result 3"), 1500);
    });
}
