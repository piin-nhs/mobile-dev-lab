import { promise1, promise2 } from "./bai6";

export async function runTasksSequentially() {
  const result1 = await promise1();
  console.log("Bai 15: " + result1);
  const result2 = await promise2();
  console.log("Bai 15: " + result2);
}
