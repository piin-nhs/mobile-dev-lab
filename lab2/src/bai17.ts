import { promise1, promise2, promise3 } from "./bai6";

export async function runForAwait() {
  const tasks = [promise1(), promise2(), promise3()];
  for await (const result of tasks) {
    console.log("Bai 17: " + result);
  }
}
