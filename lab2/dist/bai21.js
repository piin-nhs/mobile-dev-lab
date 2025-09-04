"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodo = fetchTodo;
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Bai 21:", data);
}
