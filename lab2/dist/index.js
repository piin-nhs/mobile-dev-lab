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
