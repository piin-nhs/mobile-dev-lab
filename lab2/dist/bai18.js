"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
exports.run3 = run3;
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `User ${id}`,
            });
        }, 1000);
    });
}
async function run3() {
    const user = await fetchUser(1);
    console.log("Bai 18:", user);
}
