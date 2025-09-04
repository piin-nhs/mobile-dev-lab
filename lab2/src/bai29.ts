import { createTask } from "./bai28";

export async function queueProcess() {
  const delays = [1000, 2000, 1500, 3000, 2500];
  const results: string[] = [];

  for (let i = 0; i < delays.length; i++) {
    const result = await createTask(i + 1, delays[i]);
    results.push(result);
  }
  console.log("Bai 29: " + results);
}
