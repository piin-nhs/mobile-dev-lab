"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTimeout = void 0;
exports.myTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
