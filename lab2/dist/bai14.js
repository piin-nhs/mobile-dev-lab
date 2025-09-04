"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeOneNumber = takeOneNumber;
async function takeOneNumber() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random());
        }, 1000);
    });
    return result * 3;
}
