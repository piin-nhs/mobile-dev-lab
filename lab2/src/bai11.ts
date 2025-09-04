import { myTimeout } from "./bai1";

export async function run() {
  const message = await myTimeout;
  return message;
}
