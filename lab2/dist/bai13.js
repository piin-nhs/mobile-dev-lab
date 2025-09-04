"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run2 = run2;
const bai4_1 = require("./bai4");
async function run2() {
    try {
        return await (0, bai4_1.randomNumber)();
    }
    catch (error) {
        return error;
    }
}
