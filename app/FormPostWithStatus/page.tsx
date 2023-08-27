import FormWithStatus from "@/components/FormWithStatus";
import { revalidatePath } from "next/cache";

const todos = ["Learn react"];

export default function FormPostWithStatus() {
  async function addTodo(data: FormData) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/FormPostWithStatus");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mt-16 text-4xl font-bold">Todos</h1>
      <div className="w-[500px] mt-20 flex flex-col gap-4">
        <FormWithStatus action={addTodo} />
        {todos.map((todo, i) => (
          <div
            key={i}
            className="w-full flex justify-center bg-slate-300 h-8 p-8 items-center rounded-md"
          >
            <h2 className="text-2xl">{todo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
