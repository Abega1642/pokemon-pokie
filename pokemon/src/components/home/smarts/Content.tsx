import { useState } from "react";
import axios from "axios";
import { baseUrl, imageUrl } from "../../../tools/url";
import { randomId } from "../../../tools/num";
import { useNavigate } from "react-router-dom";
import SearchBar from "../dumbs/search";
import Button from "../dumbs/button";
import "./content.css";

export function Content() {
    const [pokemon, setPokemon] = useState<string>("");
    const navigateTo = useNavigate();

    async function search() {
        try {
            const searchValue = await axios.get(`${baseUrl}${pokemon}`);
            const imgURI = `${imageUrl}${searchValue.data.id}.png`;

            navigateTo(`/pokemon-details/${pokemon}`, {
                state: {
                    imgURI,
                    pokemon: searchValue.data,
                },
            });
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                navigateTo("/not-found");
            }
        }
    }

    async function getRandomPoke() {
        try {
            const randId = randomId();
            const searchValue = await axios.get(`${baseUrl}${randId}`);

            setPokemon(searchValue.data.name);

            const imgURI = `${imageUrl}${searchValue.data.id}.png`;

            navigateTo(`/pokemon-details/${randId}`, {
                state: {
                    imgURI,
                    pokemon: searchValue.data,
                },
            });
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                navigateTo("/not-found");
            }
        }
    }

    return (
		<section className="search-container">
			<SearchBar pokemon={pokemon} setPokemon={setPokemon} />
			<Button label="Search" action={search} />
			<Button label="Random" action={getRandomPoke} />
		</section>
    );
}
