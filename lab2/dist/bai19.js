"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = fetchUsers;
exports.run4 = run4;
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    const promises = ids.map((id) => (0, bai18_1.fetchUser)(id));
    const users = await Promise.all(promises);
    return users;
}
async function run4() {
    const users = await fetchUsers([1, 2, 3]);
    console.log("Bai 19: " + JSON.stringify(users));
}
