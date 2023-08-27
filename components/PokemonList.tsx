"use client";
import BtnTransition from "@/app/pokemonSearch/btnTransition";
import { useState, useEffect } from "react";

export default function PokemonList({
  search,
}: {
  search: (search: string) => Promise<string[]>;
}) {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    search("").then((names) => setPokemonNames(names));
  }, [search]);

  const onClick = async () => {
    setPokemonNames(await search(searchString));
    setSearchString("");
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <BtnTransition onClick={onClick} />
      </div>
      <div className="text-4xl py-5">{pokemonNames.join(", ")}</div>
    </div>
  );
}
