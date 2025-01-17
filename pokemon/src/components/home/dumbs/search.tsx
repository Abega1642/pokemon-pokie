import "./search.css"

export default function SearchBar({ pokemon, setPokemon }: { pokemon: string; setPokemon: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <input
            className="modern-searchbar"
            type="text"
            placeholder="Enter Pokémon name..."
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
        />
    );
}