"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
const bai28_1 = require("./bai28");
async function queueProcess() {
    const delays = [1000, 2000, 1500, 3000, 2500];
    const results = [];
    for (let i = 0; i < delays.length; i++) {
        const result = await (0, bai28_1.createTask)(i + 1, delays[i]);
        results.push(result);
    }
    console.log("Bai 29: " + results);
}
