"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDone = taskDone;
function taskDone(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
