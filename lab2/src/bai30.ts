export async function run7() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid",
  ];

  const tasks = urls.map(async (url) => {
    const response = await fetch(url);
  });

  const results = await Promise.allSettled(tasks);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Bai 30: [Success] URL ${urls[index]}`);
    } else {
      console.error(`Bai 30: [Failure] URL ${urls[index]}`);
    }
  });
}
