"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
function error() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
