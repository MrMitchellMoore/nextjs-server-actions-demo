import addTodo from "./AddTodoAction";
const todos = ["Learn react"];

async function handleTodo(data: FormData) {
  "use server";
  addTodo(data, todos);
}

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mt-16 text-4xl font-bold">Todos</h1>
      <div className="w-[500px] mt-20 flex flex-col gap-4">
        <form action={handleTodo} className="flex gap-4">
          <input type="text" name="todo" className="rounded-lg py-4 w-full" />
          <button
            type="submit"
            className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center p-4 rounded-md"
          >
            Add Todo
          </button>
        </form>
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
