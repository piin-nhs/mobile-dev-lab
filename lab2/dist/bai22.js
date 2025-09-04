"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodo = fetchTodo;
exports.run6 = run6;
async function fetchTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
}
async function run6() {
    const ids = [1, 2, 3, 4, 5];
    const promises = ids.map((id) => fetchTodo(id));
    const todos = await Promise.all(promises);
    console.log("Bai 22:", todos);
    return todos;
}
