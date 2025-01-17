import "./display.css"
import { useNavigate } from "react-router-dom";

export default function Display({ pokemon, imgURI }: { pokemon: any; imgURI: string }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="details-card">
      <button onClick={handleBackClick} className="back-button">
        ⬅ Back
      </button>

      <h1>{pokemon.name}</h1>
      <img src={imgURI} alt={`${pokemon.name}`} />
      <ul>
        <li>
          <span>Type:</span> {pokemon.types.map((type: any) => type.type.name).join(", ")}
        </li>
        <li>
          <span>Height:</span> {pokemon.height} dm
        </li>
        <li>
          <span>Weight:</span> {pokemon.weight} hg
        </li>
      </ul>
    </div>
  );
}

