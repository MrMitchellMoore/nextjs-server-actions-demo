"use client";
import { useTransition } from "react";
export default function BtnTransition({
  onClick,
}: {
  onClick: () => Promise<void>;
}) {
  let [pending, startTransition] = useTransition();

  return (
    <button
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await new Promise((resolve) => setTimeout(resolve, 3000));
          onClick();
        });
      }}
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      {pending ? "Searching..." : "Search"}
    </button>
  );
}
