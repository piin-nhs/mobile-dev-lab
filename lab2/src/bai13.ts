import { randomNumber } from "./bai4";

export async function run2() {
  try {
    return await randomNumber();
  } catch (error) {
    return error;
  }
}
