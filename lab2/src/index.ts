import { myTimeout } from "./bai1";
import { numberTen } from "./bai2";
import { error } from "./bai3";
import { randomNumber } from "./bai4";
import { simulateTask } from "./bai5";
import { promise1, promise2, promise3 } from "./bai6";
import { chain } from "./bai8";
import { evenNumber } from "./bai9";
import { finaly } from "./bai10";
import { run } from "./bai11";
import { run1 } from "./bai12";
import { run2 } from "./bai13";
import { takeOneNumber } from "./bai14";
import { runTasksSequentially } from "./bai15";
import { runTasksInParallel } from "./bai16";
import { runForAwait } from "./bai17";
import { run3 } from "./bai18";
import { run4 } from "./bai19";
import { run5 } from "./bai20";
import { fetchTodo } from "./bai21";
import { run6 } from "./bai22";
import { fetchCompletedTodos } from "./bai23";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { waitFiveSeconds } from "./bai26";
import { fetchWithRetry } from "./bai27";
import { batchProcess } from "./bai28";
import { queueProcess } from "./bai29";
import { run7 } from "./bai30";

// Bai1
myTimeout.then((result) => {
  console.log("Bai 1: " + result);
});

// Bai2
numberTen().then((result) => {
  console.log("Bai 2: " + result);
});

// Bai3
error().catch((error) => {
  console.log("Bai 3: " + error);
});

// Bai4
randomNumber()
  .then((result) => {
    console.log("Bai 4: " + result);
  })
  .catch((error) => {
    console.log("Bai 4: " + error);
  });

// Bai5
simulateTask(1000).then((result) => {
  console.log("Bai 5: " + result);
});

// Bai6
Promise.all([promise1(), promise2(), promise3()]).then((results) => {
  console.log("Bai 6:", results);
});

// Bai7
Promise.race([promise1(), promise2(), promise3()]).then((results) => {
  console.log("Bai 7:", results);
});

// Bai8
chain.then((result) => {
  console.log("Bai 8:", result);
});

// Bai9
evenNumber.then((result) => {
  console.log("Bai 9:", result);
});

// Bai10
finaly
  .then((result) => {
    console.log("Bai 10:", result);
  })
  .finally(() => console.log("Bai 10: Done"));

// Bai11
run().then((result) => {
  console.log("Bai 11:", result);
});

// Bai12
run1().then((result) => {
  console.log("Bai 12:", result);
});

// Bai13
run2().then((result) => {
  console.log("Bai 13:", result);
});

// Bai14
takeOneNumber().then((result) => {
  console.log("Bai 14:", result);
});

// Bai 15
runTasksSequentially();

// Bai 16
runTasksInParallel();

// Bai 17
runForAwait();

// Bai 18
run3();

// Bai 19
run4();

// Bai 20
run5();

// Bai 21
fetchTodo();

// Bai 22
run6();

// Bai 23
fetchCompletedTodos();

// Bai 24
postData();

// Bai 25
downloadFile();

// Bai 26
waitFiveSeconds();

// Bai 27
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then((data) => console.log("Bai 27:", data))
  .catch((err) => console.error("Bai 27:", err));

// Bai 28
batchProcess();

// Bai 29
queueProcess(); 


// Bai 30
run7();
