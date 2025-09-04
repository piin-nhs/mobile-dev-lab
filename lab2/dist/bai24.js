"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = postData;
async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Xin chao",
            body: "Nguyen Hoang Sang",
            userId: 1,
        }),
    });
    const data = await response.json();
    console.log("Bai 24:", data);
}
