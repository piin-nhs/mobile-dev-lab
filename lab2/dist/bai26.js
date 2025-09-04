"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFiveSeconds = waitFiveSeconds;
async function waitFiveSeconds() {
    console.log("Bai 26: Tai");
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
    console.log("Bai 26: Xong");
}
