import { useState } from 'react'
import './App.css'
import { baseUrl } from './api';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState<string>("");
  const [pokie, setPokie] = useState<string>(""); 
  const img : string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  async function search(){
      try {
        const searchValue = await axios.get(`${baseUrl}${pokemon}`);
        setPokie(img + searchValue.data.id + ".png");
        console.log(searchValue.data);
      
      } catch (error) {
        if (error.response.status == 404) {
          alert(`Pokemon ${pokemon} not found`);
        }
      }
  }

  const random = ():number => {
    return Math.floor(Math.random() * 900 + 1);
  }

  async function getRandomPoke(){
    try {
      const rand = random();
      if (rand < 100)
        rand = "0" + rand;
      const searchValue = await axios.get(`${baseUrl}${rand}`);
      setPokemon(searchValue.data.name)
      
      setPokie(img + searchValue.data.id+ ".png")
      console.log(pokie);
      
      console.log(searchValue.data);
      return rand;
      
    } catch (error) {
      if (error.response.status == 404) {
        alert(`Pokemon ${pokemon} not found`);
      }
    }
  }

  

  return (
    <>
      <div className='box'>
        <img className='pokeball' src="img.png" alt="pokeball"/>
        <div>
          <input 
            className='input-search'
            type="text" 
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
          <button
            onClick={search}
          >
            search
          </button>
          <button
            onClick={getRandomPoke}
          >
            Random
          </button>
        </div>
        <div>
          <h1>{pokemon.toUpperCase()}</h1>
          <img src={`${pokie}`} alt={pokemon+ " image"}/>
        </div>

      </div>
    </>
  )
}

export default App
