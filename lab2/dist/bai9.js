"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumber = void 0;
exports.evenNumber = Promise.resolve([10, 20, 35])
    .then(n => n.filter((item) => item % 2 == 0));
