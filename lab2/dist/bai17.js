"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runForAwait = runForAwait;
const bai6_1 = require("./bai6");
async function runForAwait() {
    const tasks = [(0, bai6_1.promise1)(), (0, bai6_1.promise2)(), (0, bai6_1.promise3)()];
    for await (const result of tasks) {
        console.log("Bai 17: " + result);
    }
}
