import FormButton from "@/components/FormButton";
import { revalidatePath } from "next/cache";

const todos = ["Learn react"];

export default function App() {
  async function addTodo(todo: string) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 2000));
    todos.push(todo);
    revalidatePath("/FormPostWithTransitions");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mt-16 text-4xl font-bold">Todos</h1>
      <div className="w-[500px] mt-20 flex flex-col gap-4">
        <FormButton addTodo={addTodo} />
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
