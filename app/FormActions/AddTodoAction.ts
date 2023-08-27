"use server";

import { revalidatePath } from "next/cache";

async function addTodo(data: FormData, todos: string[]) {
  const todo = data.get("todo") as string;
  todos.push(todo);
  revalidatePath("/FormActions");
}
export default addTodo;
