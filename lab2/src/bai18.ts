export async function fetchUser(id: number) {
  return new Promise<{ id: number; name: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, 1000);
  });
}

export async function run3() {
  const user = await fetchUser(1);
  console.log("Bai 18:", user);
}
