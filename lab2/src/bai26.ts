export async function waitFiveSeconds() {
  console.log("Bai 26: Tai");

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  console.log("Bai 26: Xong");
}
