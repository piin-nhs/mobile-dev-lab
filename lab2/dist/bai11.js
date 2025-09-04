"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const bai1_1 = require("./bai1");
async function run() {
    const message = await bai1_1.myTimeout;
    return message;
}
