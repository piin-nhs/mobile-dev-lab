export function createTask(id: number, delay: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} xong sau ${delay}ms`);
    }, delay);
  });
}

export async function batchProcess() {
  const tasks = [
    createTask(1, 1000),
    createTask(2, 2000),
    createTask(3, 1500),
    createTask(4, 3000),
    createTask(5, 2500),
  ];

  const results = await Promise.all(tasks);
  console.log("Bai 28:", results);
}
