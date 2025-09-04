import { fetchUser } from "./bai18";

export async function fetchUserWithTimeout(id: number, timeoutMs = 2000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Loi"), timeoutMs)
  );
  return Promise.race([fetchUser(id), timeout]);
}

export async function run5() {
  try {
    const user = await fetchUserWithTimeout(3);
    console.log("Bai 20:", user);
  } catch (error) {
    console.error("Bai 20:", error);
  }
}
