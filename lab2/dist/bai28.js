"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.batchProcess = batchProcess;
function createTask(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} xong sau ${delay}ms`);
        }, delay);
    });
}
async function batchProcess() {
    const tasks = [
        createTask(1, 1000),
        createTask(2, 2000),
        createTask(3, 1500),
        createTask(4, 3000),
        createTask(5, 2500),
    ];
    const results = await Promise.all(tasks);
    console.log("Bai 28:", results);
}
