"use client";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  action: string | ((formData: FormData) => void) | undefined;
};

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center p-4 rounded-md"
    >
      Add Todo
    </button>
  );
}

const FormWithStatus = ({ action }: Props) => {
  const [todo, setTodo] = useState("");
  return (
    <form action={action} className="flex gap-4">
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
        name="todo"
        className="rounded-lg py-4 w-full"
      />
      <Button />
    </form>
  );
};

export default FormWithStatus;
