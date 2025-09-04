"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCompletedTodos = fetchCompletedTodos;
const bai22_1 = require("./bai22");
async function fetchCompletedTodos() {
    const ids = [1, 2, 3, 4, 5];
    const promises = ids.map((id) => (0, bai22_1.fetchTodo)(id));
    const todos = await Promise.all(promises);
    const completed = todos.filter((item) => item.completed);
    console.log("Bai 23:", completed);
}
