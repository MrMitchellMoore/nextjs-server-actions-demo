"use server";
type Pokemon = {
  results: [
    {
      name: string;
      url?: string;
    }
  ];
};

export default async function search(search: string) {
  const pokemonRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );

  if (!pokemonRes.ok) throw new Error("Fetch failed");

  const pokemonData: Pokemon = await pokemonRes.json();

  return pokemonData.results
    .filter((p: { name: string }) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((p: { name: string }) => p.name)
    .slice(0, 50);
}
