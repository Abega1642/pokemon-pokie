export default function Display({bool, imageUrl, pokemon}) {
    if (!bool) {
        return (<></>)
    }

    return (
        <>
            <div>
                
                <h1><i>{pokemon.toUpperCase()}</i></h1>
                <img src={`${imageUrl}`} alt={`${pokemon} image`}/>
            </div>
        </>
    )
}