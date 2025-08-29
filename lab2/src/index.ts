import { myTimeout } from "./bai1";
import { numberTen } from "./bai2";
import { error } from "./bai3";
import { randomNumber } from "./bai4";
import { taskDone } from "./bai5";
import { promise1, promise2, promise3 } from "./bai6";
import { chain } from "./bai8";
import { evenNumber } from "./bai9";
import { finaly } from "./bai10";

// Bai1
myTimeout.then((result) => {
    console.log("Bai 1: " + result);
})

// Bai2
numberTen().then((result) => {
    console.log("Bai 2: " + result);
})

// Bai3
error().catch((error) => {
    console.log("Bai 3: " + error);
})

// Bai4
randomNumber()
    .then((result) => {
        console.log("Bai 4: " + result);
    }).catch((error) => {
        console.log("Bai 4: " + error);
    })

// Bai5
taskDone(1000).then((result) => {
    console.log("Bai 5: " + result);
})

// Bai6
Promise.all([promise1(), promise2(), promise3()])
    .then((results) => {
        console.log("Bai 6:", results);
    })

// Bai7
Promise.race([promise1(), promise2(), promise3()])
    .then((results) => {
        console.log("Bai 7:", results);
    })

//Bai8
chain.then((result) => {
    console.log("Bai 8:", result)
})

//Bai9
evenNumber.then((result) => {
    console.log("Bai 9:", result)
})

//Bai10
finaly
    .then((result) => {
        console.log("Bai 10:", result)
    })
    .finally(() => console.log("Done"))
