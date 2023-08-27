import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full justify-center items-center h-screen border">
      <div className="w-full flex flex-col gap-4 justify-center items-center h-full">
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/react-hooks-form"}
        >
          React Hook Form
        </Link>
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/HookFormWithZod"}
        >
          React Hook Form + Zod
        </Link>
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/FormActions"}
        >
          Form Actions
        </Link>
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/FormPostWithStatus"}
        >
          Form Actions With Status
        </Link>
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/FormPostWithTransitions"}
        >
          Form Action Transitions
        </Link>
        <Link
          className="text-black text-3xl bg-yellow-400 p-2 flex justify-center rounded-lg hover:bg-slate-400 hover:text-slate-200"
          href={"http://localhost:3000/pokemonSearch"}
        >
          Pokemon Search
        </Link>
      </div>
    </div>
  );
}
