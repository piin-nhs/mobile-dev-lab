import { fetchUser } from "./bai18";

export async function fetchUsers(ids: number[]) {
  const promises = ids.map((id) => fetchUser(id));
  const users = await Promise.all(promises);
  return users;
}

export async function run4() {
  const users = await fetchUsers([1, 2, 3]);
  console.log("Bai 19: " + JSON.stringify(users));
}
