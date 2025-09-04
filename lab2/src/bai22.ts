export async function fetchTodo(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response.json();
}

export async function run6(){
  const ids = [1, 2, 3, 4, 5];

  const promises = ids.map((id) => fetchTodo(id));

  const todos = await Promise.all(promises);
  console.log("Bai 22:", todos);
  return todos;
}
