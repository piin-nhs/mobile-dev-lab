import { promise1, promise2 } from "./bai6";

export async function runTasksInParallel() {
  const [result1, result2] = await Promise.all([promise1(), promise2()]);
  console.log("Bai 16: " + result1);
  console.log("Bai 16: " + result2);
}
