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
}).catch((error) => {
    console.log("Bai 4: " + error);
});
// Bai5
(0, bai5_1.taskDone)(1000).then((result) => {
    console.log("Bai 5: " + result);
});
// Bai6
Promise.all([(0, bai6_1.promise1)(), (0, bai6_1.promise2)(), (0, bai6_1.promise3)()])
    .then((results) => {
    console.log("Bai 6:", results);
});
// Bai7
Promise.race([(0, bai6_1.promise1)(), (0, bai6_1.promise2)(), (0, bai6_1.promise3)()])
    .then((results) => {
    console.log("Bai 7:", results);
});
//Bai8
bai8_1.chain.then((result) => {
    console.log("Bai 8:", result);
});
//Bai9
bai9_1.evenNumber.then((result) => {
    console.log("Bai 9:", result);
});
//Bai10
bai10_1.finaly.then((result) => {
    console.log("Bai 10:", result);
}).finally(() => console.log("Done"));
