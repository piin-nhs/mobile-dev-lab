"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
// Bai1
bai1_1.myTimeout.then((result) => {
    console.log("Bai 1: " + result);
});
// Bai2
(0, bai2_1.numberTen)().then((result) => {
    console.log("Bai 2: " + result);
});
// Bai3
(0, bai3_1.error)().catch((error) => {
    console.log("Bai 3: " + error);
});
// Bai4
(0, bai4_1.randomNumber)()
    .then((result) => {
    console.log("Bai 4: " + result);
})
    .catch((error) => {
    console.log("Bai 4: " + error);
});
// Bai5
(0, bai5_1.simulateTask)(1000).then((result) => {
    console.log("Bai 5: " + result);
});
// Bai6
Promise.all([(0, bai6_1.promise1)(), (0, bai6_1.promise2)(), (0, bai6_1.promise3)()]).then((results) => {
    console.log("Bai 6:", results);
});
// Bai7
Promise.race([(0, bai6_1.promise1)(), (0, bai6_1.promise2)(), (0, bai6_1.promise3)()]).then((results) => {
    console.log("Bai 7:", results);
});
// Bai8
bai8_1.chain.then((result) => {
    console.log("Bai 8:", result);
});
// Bai9
bai9_1.evenNumber.then((result) => {
    console.log("Bai 9:", result);
});
// Bai10
bai10_1.finaly
    .then((result) => {
    console.log("Bai 10:", result);
})
    .finally(() => console.log("Bai 10: Done"));
// Bai11
(0, bai11_1.run)().then((result) => {
    console.log("Bai 11:", result);
});
// Bai12
(0, bai12_1.run1)().then((result) => {
    console.log("Bai 12:", result);
});
// Bai13
(0, bai13_1.run2)().then((result) => {
    console.log("Bai 13:", result);
});
// Bai14
(0, bai14_1.takeOneNumber)().then((result) => {
    console.log("Bai 14:", result);
});
// Bai 15
(0, bai15_1.runTasksSequentially)();
// Bai 16
(0, bai16_1.runTasksInParallel)();
// Bai 17
(0, bai17_1.runForAwait)();
// Bai 18
(0, bai18_1.run3)();
// Bai 19
(0, bai19_1.run4)();
// Bai 20
(0, bai20_1.run5)();
// Bai 21
(0, bai21_1.fetchTodo)();
// Bai 22
(0, bai22_1.run6)();
// Bai 23
(0, bai23_1.fetchCompletedTodos)();
// Bai 24
(0, bai24_1.postData)();
// Bai 25
(0, bai25_1.downloadFile)();
// Bai 26
(0, bai26_1.waitFiveSeconds)();
// Bai 27
(0, bai27_1.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/1", 3)
    .then((data) => console.log("Bai 27:", data))
    .catch((err) => console.error("Bai 27:", err));
// Bai 28
(0, bai28_1.batchProcess)();
// Bai 29
(0, bai29_1.queueProcess)();
// Bai 30
(0, bai30_1.run7)();
