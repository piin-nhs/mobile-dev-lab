"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTasksSequentially = runTasksSequentially;
const bai6_1 = require("./bai6");
async function runTasksSequentially() {
    const result1 = await (0, bai6_1.promise1)();
    console.log("Bai 15: " + result1);
    const result2 = await (0, bai6_1.promise2)();
    console.log("Bai 15: " + result2);
}
