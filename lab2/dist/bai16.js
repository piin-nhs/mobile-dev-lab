"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTasksInParallel = runTasksInParallel;
const bai6_1 = require("./bai6");
async function runTasksInParallel() {
    const [result1, result2] = await Promise.all([(0, bai6_1.promise1)(), (0, bai6_1.promise2)()]);
    console.log("Bai 16: " + result1);
    console.log("Bai 16: " + result2);
}
