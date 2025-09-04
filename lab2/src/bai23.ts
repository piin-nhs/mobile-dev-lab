import { fetchTodo } from "./bai22";

export async function fetchCompletedTodos() {
  const ids = [1, 2, 3, 4, 5];

  const promises = ids.map((id) => fetchTodo(id));

  const todos = await Promise.all(promises);  

  const completed = todos.filter((item) => item.completed);
  console.log("Bai 23:", completed);
}
