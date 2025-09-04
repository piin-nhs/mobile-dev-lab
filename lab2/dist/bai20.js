"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserWithTimeout = fetchUserWithTimeout;
exports.run5 = run5;
const bai18_1 = require("./bai18");
async function fetchUserWithTimeout(id, timeoutMs = 2000) {
    const timeout = new Promise((_, reject) => setTimeout(() => reject("Loi"), timeoutMs));
    return Promise.race([(0, bai18_1.fetchUser)(id), timeout]);
}
async function run5() {
    try {
        const user = await fetchUserWithTimeout(3);
        console.log("Bai 20:", user);
    }
    catch (error) {
        console.error("Bai 20:", error);
    }
}
