"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberTen = numberTen;
function numberTen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
