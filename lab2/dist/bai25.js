"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
async function downloadFile() {
    console.log("Bai 25: Tai");
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    console.log("Bai 25: Xong");
}
