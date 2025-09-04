export async function takeOneNumber() {
  const result = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
  return result * 3;
}
