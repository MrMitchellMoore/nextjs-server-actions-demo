"use client";
import { useRef, useTransition } from "react";
export default function FormButton({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) {
  let [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-4">
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="rounded-lg py-4 w-full"
      />

      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await addTodo(todoRef.current!.value);
          });
        }}
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center p-4 rounded-md"
      >
        Add Todo
      </button>
    </div>
  );
}
