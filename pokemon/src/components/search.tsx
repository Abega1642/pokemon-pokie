export default function SearchBar({pokemon, setPokemon}) {
    return (
        <>
            <input 
                className='input-search'
                type="text" 
                value={pokemon}
                onChange={(e) => setPokemon(e.target.value)}
            />
        </>
    )
}