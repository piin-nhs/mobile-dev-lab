"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run1 = run1;
const bai5_1 = require("./bai5");
async function run1() {
    const result = await (0, bai5_1.simulateTask)(2000);
    return result;
}
