"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = randomNumber;
function randomNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.random() * 2 - 1;
        if (number >= 0) {
            resolve(number);
        }
        else {
            reject("So am");
        }
    });
}
