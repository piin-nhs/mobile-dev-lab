"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
exports.chain = Promise.resolve(10)
    .then(n => n * n)
    .then(n => n * 2)
    .then(n => n + 5);
