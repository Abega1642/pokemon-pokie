import { useState } from 'react'
import './App.css'
import { baseUrl, imageUrl } from './tools/url';
import axios from 'axios';
import SearchBar from './components/search';
import Button from './components/button';
import Display from './components/display';
import { getRandomNum, format } from './tools/num';

function App() {
  const [pokemon, setPokemon] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>(""); 
  const [show, setShow] = useState<boolean>(false);

  async function search(){
      try {
        const searchValue = await axios.get(`${baseUrl}${pokemon}`);
        setImgUrl(`${imageUrl}${searchValue.data.id}.png`);
        setShow(true);

        console.log(searchValue.data);
      
      } catch (error: any) {
        if (error.response.status == 404) {
          alert(`Pokemon ${pokemon} not found`);
          setShow(false);
        }
      }
  }

  async function getRandomPoke(){
    try {
      const randId = randomId()
      const searchValue = await axios.get(`${baseUrl}${randId}`);

      setPokemon(searchValue.data.name)
      setImgUrl(`${imageUrl}${searchValue.data.id}.png`);
      setShow(true);
      
      console.log(searchValue.data);

      return randId;
      
    } catch (error : any) {
      if (error.response.status == 404) {
        alert(`Pokemon ${pokemon} not found`);
        setShow(false);
      }
    }
  }

  const randomId = (): string => {
    return format(getRandomNum(1000), 3);
  }


  return (
    <>
      <div className='box'>
        <img className='pokeball' src="img.png" alt="pokeball"/>
        <div>
          <SearchBar pokemon={pokemon} setPokemon={setPokemon}></SearchBar>
          <Button label="Search" action={search} />
          <Button label="Random" action={getRandomPoke}/>
        </div>
        <Display bool={show} imageUrl={imgUrl} pokemon={pokemon}/>
      </div>
    </>
  )
}

export default App
