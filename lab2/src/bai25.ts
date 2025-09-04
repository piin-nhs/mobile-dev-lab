export async function downloadFile() {
  console.log("Bai 25: Tai");

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  console.log("Bai 25: Xong");
}
