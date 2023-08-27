import PokemonList from "@/components/PokemonList";
import search from "./actions";
export default function PokemonSearch() {
  return (
    <main className="p-5">
      <PokemonList search={search} />
    </main>
  );
}
